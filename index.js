const express = require("express");
const routes = require("./routes");
const path = require("path");

//crear una aplicación de express
const app = express();

// Habilitar PUG
app.set("view engine", "pug");

// Añadir Carpeta de Vistas
app.set("views", path.join(__dirname, "./views"));

app.use("/", routes());

app.listen(3000);
