const Proyectos = require("../models/Proyectos");

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  res.render("index", {
    nombrePagina: "Proyectos",
    proyectos,
  });
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
    proyectos,
  });
};

exports.nuevoProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  // validar que no este vacio el input
  const nombre = req.body.nombre;

  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un Nombre al Proyecto" });
  }

  // si hay errores
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
      proyectos,
    });
  } else {
    // No hay errores
    // Insertar en la BD.
    const proyecto = await Proyectos.create({ nombre });

    res.redirect("/");
  }
};

exports.proyectoPorUrl = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  const proyecto = await Proyectos.findOne({
    where: {
      url: req.params.url,
    },
  });

  if (!proyecto) return next();

  // Render a la Vista
  res.render("tareas", {
    nombrePagina: "Tareas del Proyecto",
    proyectos,
    proyecto,
  });
};
