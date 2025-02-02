// Importación de módulos y configuración inicial
const express = require("express");
const app = express();
const hbs = require("hbs");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config(); // Carga variables de entorno desde un archivo .env
const mongoose = require("mongoose");

const PORT = process.env.PORT || 9000; // Configura el puerto del servidor web

// Inicia el servidor web
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

// Middleware para procesar datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Configura el motor de plantillas Handlebars (hbs)
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

mongoose.connect(process.env.MONGOLOCAL)
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos:", error);
  });


// Definición de un modelo de datos para MongoDB utilizando Mongoose
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  email: String,
  telefono: String,
  mensaje: String,
});

// Definición de rutas de la aplicación

// Ruta principal que renderiza la plantilla "index.hbs"
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Home",
  });
});

// Ruta que renderiza la plantilla "calculadora.hbs"
app.get("/calculadora", (req, res) => {
  res.render("calculadora", {
    titulo: "Calculadora",
  });
});

// Ruta personalizada "matias" que renderiza la plantilla "matias.hbs"
app.get("/matias", (req, res) => {
  res.render("matias", {
    titulo: "Matias",
  });
});

// Ruta para manejar el formulario de contacto enviado mediante POST
app.post("/", async (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const telefono = req.body.telefono;
  const mensaje = req.body.mensaje;

  // Función asincrónica para enviar un correo electrónico
  async function envioMail() {
    // Configuración del transportador de correo (en este caso, Gmail)
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

  // Creación de un objeto de datos a partir de la información del formulario
  let datos = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
  };

  // Creación de una instancia del modelo "Usuario" con los datos del formulario
  const usuario = new Usuario(datos);

  try {
    // Guarda los datos del formulario en la base de datos MongoDB
    await usuario.save();
    console.log("Datos guardados correctamente");

    // Envía un correo electrónico al remitente
    await envioMail();
    res.render("enviado"); // Renderiza una página de confirmación
  } catch (error) {
    console.log("Error al guardar los datos:", error);
    res.status(500).send("Error al guardar los datos");
  }
});

