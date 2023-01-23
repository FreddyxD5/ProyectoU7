import { Router } from "express";
import { findAll, crearUsuario, borrarUsuario, actualizarUsuario, findID } from "../controller/userController";
const userRouter: Router = Router();


userRouter.get('/user_list', findAll)
userRouter.get("/:id", findID);
userRouter.post("/", crearUsuario);
userRouter.put("/:id",actualizarUsuario);
userRouter.delete("/:id",borrarUsuario);



export default userRouter;