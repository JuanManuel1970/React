import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2'

const Formulario = () =>{

    const URL = process.env.REACT_APP_URL;


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { 
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
             axios.post(URL, datos);
            e.target.reset();
            console.log(URL);
                Swal.fire({
                title: 'Bienvenido!',
                text: 'Tu Usuario ha sido creado',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
    
    

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'ERROR',
                text: 'Tu Usuario no  ha sido creado',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

            
        }
    }

/*  const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */


    return (
        <>
            <h1>Formulario de Registro</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Nombre: </label>
                    <input 
                        placeholder='Nombre'
                        type= 'text'
                        name='nombre'
                        {...register('nombre', 
                            {
                                required: true,
                                maxLength: 50
                            })
                        }
                    />
                </Form.Field>
                {errors.nombre && <p className="errores">El nombre es obligatorio y con un máximo de 50 caracteres</p>}

                <Form.Field>
                    <label>Apellido: </label>
                    <input 
                        placeholder='Apellido'
                        type='text'
                        name='apellido'
                        {...register('apellido', 
                            {
                                required: true,
                                maxLength: 80
                            })
                        }
                    />
                </Form.Field>
                {errors.apellido && <p className="errores">El apellido es obligatorio y con un máximo de 80 caracteres</p>}

                <Form.Field>
                    <label>Email: </label>
                    <input 
                        placeholder='Email'
                        type='email'
                        name='email'
                        {...register('email', 
                        {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })
                        }
                    />
                </Form.Field>
                {errors.email && <p className="errores">El email es obligatorio</p>}

                <Form.Field>
                    <label>Password: </label>
                    <input 
                        placeholder='Password de 6 a 10 caracteres'
                        type='password'
                        name='password'
                        {...register('password',
                        {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
                        })
                        }   
                    />
                </Form.Field>
                {errors.password && <p className="errores">El password debe contener minúsculas, mayúsculas y entre 6 y 10 caracteres</p>}

                <div className='centrar'>
                        <Button.Group>
                            <Button type='button' onClick={() => reset()} primary>Limpiar Formulario</Button>
                            <Button.Or />
                            <Button type='submit' positive>Enviar Datos</Button>
                        </Button.Group>
                    {/* 
                    <Button type='submit'>Enviar Datos</Button>
                    <Button type='button' onClick={() => reset()}>Limpiar Formulario</Button> 
                    */}
                </div>
            </Form>
        </>
    )}


export default Formulario;