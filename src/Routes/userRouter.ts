import { Router } from "express";
import { findAll, crearUsuario,borrarUsuario, actualizarUsuario, findID } from "../controller/userController";
const cRouter: Router = Router();


cRouter.post("/", crearUsuario);
cRouter.post("/", crearUsuario);
cRouter.delete("/",borrarUsuario);
cRouter.put("/",actualizarUsuario);
cRouter.get("/:id", findID);

export default cRouter;