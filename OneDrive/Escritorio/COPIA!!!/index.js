const express = require (`express`);
const app = express();
const mysql = require (`mysql2`);
const hbs = require (`hbs`);
const path = require (`path`);
const nodemailer = require (`nodemailer`);
const { application } = require("express");
require(`dotenv`).config();


const PORT = process.env.PORT || 9000;



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,`public`)));



//Configuramos el motor de plantillas de HBS 

app.set(`view engine`,`hbs`);

//configuramos la ubicacion de las plantillas 

app.set(`views`, path.join(__dirname,`views`));

//configuramos los parciales de los motores de plantillas

hbs.registerPartials(path.join(__dirname,`views/parcials`)); 




//crear base de datoy y despues se comenta



//conexion a la base de datos
const conexion = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
port:process.env.DBPORT
});

conexion.connect((err) =>{
    if(err) throw err;
    console.log(`Conectado a la Base de datos de : ${process.env.DATABASE}`);
})





//rutas de la aplicacion
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Home'
    })
})




app.get('/calculadora', (req, res) => {
    res.render('calculadora', {
        titulo: 'calculadora'
    })
})

app.get('/sprint1', (req, res) => {
    res.render('sprint1', {
        titulo: 'sprint1'
    })
})

app.get('/matias', (req, res) => {
    res.render('matias', {
        titulo: 'matias'
    })
})







app.post('/', (req, res) =>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const mensaje = req.body.mensaje;


    //Creamos una función para enviar Email al cliente
    async function envioMail(){
        //Configuramos la cuenta del envío
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAILPASSWORD
            }
        });

        //Envío del mail
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: `${email}`,
            subject: "Gracias por suscribirte a nuestra App",
            html:`Muchas gracias por visitar mi página <br>
            Me pondre en contacto con vos , lo antes posible ...Saludos!!! <br>`
        })
    }

    let datos = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        mensaje : mensaje
    }

    let sql = "INSERT INTO contactos set ?";

    conexion.query(sql, datos, function(err){
        if (err) throw err;
            console.log(`1 Registro insertado`);
            //Email
            envioMail().catch(console.error);
            res.render('enviado')
        })

})

//Servidor a la escucha de las peticiones
app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en el Puerto: ${PORT}`);
})































































































































app.post('/formulario', (req, res) =>{    
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;

    let datos = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    }

    let sql = "INSERT INTO productos set ?";

    conexion.query(sql, datos, function(err){
        if (err) throw err;
            console.log(`1 Registro insertado`);
            res.render('enviado')
        })
})










