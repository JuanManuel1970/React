const express = require("express");  // Importamos el módulo Express
const app = express();  // Creamos una instancia de la aplicación Express
const hbs = require("hbs");  // Importamos el módulo Handlebars para las vistas
const nodemailer = require("nodemailer");  // Importamos nodemailer para enviar correos
const path = require("path");  // Importamos el módulo path para manejar rutas
require("dotenv").config();  // Configuramos las variables de entorno
const mongoose = require("mongoose");  // Importamos mongoose para interactuar con MongoDB

const PORT = process.env.PORT || 9000;  // Configuramos el puerto en el que se ejecutará el servidor

// Configuración de Express y Handlebars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Conexión a la base de datos MongoDB usando variables de entorno
mongoose
  .connect(process.env.MONGOATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos:", error);
  });

// Definición del esquema para el modelo Usuario en la base de datos
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  email: String,
  telefono: String,
  mensaje: String,
});

// Rutas de la aplicación
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Home",
  });
});

app.get("/calculadora", (req, res) => {
  res.render("calculadora", {
    titulo: "Calculadora",
  });
});

// Página personalizada para "Matias"
app.get("/matias", (req, res) => {
  res.render("matias", {
    titulo: "Matias",
  });
});

// Manejo del formulario de contacto (POST)
app.post("/", async (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const telefono = req.body.telefono;
  const mensaje = req.body.mensaje;

  // Función para enviar un correo utilizando nodemailer
  async function envioMail() {
    // Configuración del transportador para el servicio de correo
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    // Configuración del correo a enviar
    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      cc: "juanma26@gmail.com",
      subject: "Gracias por contactarme!!!",
      html: `Hola ${nombre}! , muchas gracias por visitar mi página <br><br>
            Me pondré en contacto contigo lo antes posible...¡Saludos!<br>
            <br>
            <hr>
             Juan Manuel`,
    });
  }

  // Datos del formulario recopilados en un objeto
  let datos = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
  };

  // Creación de un nuevo documento Usuario en MongoDB
  const usuario = new Usuario(datos);

  try {
    await usuario.save();  // Guardamos el documento en la base de datos
    console.log("Datos guardados correctamente");

    await envioMail();  // Enviamos el correo de agradecimiento
    res.render("enviado");  // Mostramos una vista de confirmación
  } catch (error) {
    console.log("Error al guardar los datos:", error);
    res.status(500).send("Error al guardar los datos");
  }
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor conectado en el puerto: ${PORT}`);
});



