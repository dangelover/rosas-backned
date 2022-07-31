const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "no name", apikey } = req.query;
  res.json({
    ok: true,
    msg: "get api - controlador",
    q,
    nombre,
    apikey,
  });
};
const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    condition: "correcto",
    msg: "post api-controlador",
    nombre,
    edad,
  });
};
const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.status(400).json({
    condition: "correcto",
    msg: "put api-controlador",
    id,
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete api-controlador",
  });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
