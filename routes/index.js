const express = require("express");
const router = express.Router();

//importando controlador
const proyectosController = require("../controllers/proyectosController");

module.exports = function () {
  router.get("/", proyectosController.proyectosHome);

  return router;
};
