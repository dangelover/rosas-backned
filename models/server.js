const express = require("express");
const cors = require("cors");
class Server {
  //creamos en el constructor una propiedad de express en la clase servidor
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //path de las rutas
    this.usuariosPath = "/api/usuarios";
    //Middlewares => son funciones que añaden otra funcionalidad a mi webserver, siemnpre se ejecuta cuando levantamos el servidor
    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }
  middlewares() {
    //CORS
    this.app.use(cors());
    //Parseo y lectura del body
    this.app.use(express.json());
    //directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usuariosPath, require("../routers/usuarios"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}
module.exports = Server;
