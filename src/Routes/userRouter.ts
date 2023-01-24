import { Router } from "express";
import * as userController from "../controller/userController";
import { validateAuthorization } from "../middleware/authMiddleware";


const userRouter: Router = Router();
userRouter.use(validateAuthorization)


userRouter.get("/user_list", userController.findAllUsers)
userRouter.get("/user_playlist", userController.obtener_usuarios_con_playlist)

userRouter.post("/", userController.crearUsuario);
userRouter.put("/:id", userController.actualizarUsuario);
userRouter.delete("/:id", userController.borrarUsuario);
userRouter.get("/:id",userController.findByID);


export default userRouter;


