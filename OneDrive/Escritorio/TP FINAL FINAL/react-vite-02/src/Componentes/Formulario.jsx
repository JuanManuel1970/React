import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Formulario = () => {
  const URL = import.meta.env.VITE_URL;

  console.log(URL);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (datos, e) => {
    e.preventDefault();
    try {
      console.log(datos);
      await axios.post(URL, datos);
      e.target.reset();
      console.log(URL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center m-5">
        <h1>Formulario de Registro</h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Nombre:</label>
          <input
            className="form-control"
            placeholder="Nombre"
            type="text"
            name="nombre"
            {...register('nombre', {
              required: true,
              maxLength: 50
            })}
          />
        </Form.Field>
        {errors.nombre && <p className="errores">El nombre es obligatorio y con un máximo de 50 caracteres</p>}

        <Form.Field>
          <label>Apellido:</label>
          <input
            className="form-control"
            placeholder="Apellido"
            type="text"
            name="apellido"
            {...register('apellido', {
              required: true,
              maxLength: 80
            })}
          />
        </Form.Field>
        {errors.apellido && <p className="errores">El apellido es obligatorio y con un máximo de 80 caracteres</p>}

        <Form.Field>
          <label>Email:</label>
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            {...register('email', {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
        </Form.Field>
        {errors.email && <p className="errores">El email es obligatorio</p>}

        <Form.Field>
          <label>Password:</label>
          <input
            className="form-control"
            placeholder="Password de 6 a 10 caracteres"
            type="password"
            name="password"
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
            })}
          />
        </Form.Field>
        {errors.password && <p className="errores">El password debe contener minúsculas, mayúsculas y entre 6 y 10 caracteres</p>}

        <div className="centrar">
          <Button.Group>
            <Button type="button" onClick={() => reset()} primary>Limpiar Formulario</Button>
            <Button.Or />
            <Button type="submit" positive>Enviar Datos</Button>
          </Button.Group>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
