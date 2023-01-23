import { Router } from "express";
import { 
    findAllUsers, crearUsuario,
    borrarUsuario,actualizarUsuario,
    findByID, obtener_usuarios_con_playlist
} from "../controller/userController";


const userRouter: Router = Router();

userRouter.get("/user_list", findAllUsers)
userRouter.get("/user_playlist", obtener_usuarios_con_playlist)

userRouter.post("/", crearUsuario);
userRouter.put("/:id",actualizarUsuario);
userRouter.delete("/:id",borrarUsuario);
userRouter.get("/:id",findByID);




export default userRouter;


