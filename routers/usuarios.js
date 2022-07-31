const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require("../controllers/usuarios");
const router = Router();
//usuariosGet => solo mandamos la referencia no lo ejecutamos, ejecutar es con los parentesis
//cuando llamamos a esta funcion le pasamos tambien la req, res
//(req, res) => usuariosGet(req, res) === usuariosGet
router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/:id", usuariosPut);
router.delete("/", usuariosDelete);
module.exports = router;
