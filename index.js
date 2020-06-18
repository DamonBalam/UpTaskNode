const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
// const expressValidator = require("express-validator");

// helpers con algunas funciones
const helpers = require("./helpers");

// crear la conexion a la base de datos
const db = require("./config/db");

// importando el modelo
require("./models/Proyectos");

db.sync()
  .then(() => console.log("Conectando al Servidor"))
  .catch((error) => console.log(error));

//crear una aplicación de express
const app = express();

// agregamos express validator a toda la aplicacion
// app.use(expressValidator());

// Donde cargar los archivos estaticos
app.use(express.static("public"));

// Habilitar PUG
app.set("view engine", "pug");

// Añadir Carpeta de Vistas
app.set("views", path.join(__dirname, "./views"));

app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

// Habilitar BodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes());

app.listen(3000);
