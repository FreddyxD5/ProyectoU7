import { Router } from "express";
import { findAll, crearUsuario,borrarUsuario, actualizarUsuario, findID } from "../controller/userController";
const userRouter: Router = Router();


userRouter.post("/", crearUsuario);
userRouter.post("/", crearUsuario);
userRouter.delete("/",borrarUsuario);
userRouter.put("/",actualizarUsuario);
userRouter.get("/:id", findID);

export default userRouter;