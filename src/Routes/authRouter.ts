import { Router } from "express";
import * as authController from "../controller/authController";
import { crearUsuario } from "../controller/userController";
import { validateAuthorization } from "../middleware/authMiddleware";


const authRouter: Router = Router();

authRouter.post('/login', authController.login)
authRouter.post('/register',crearUsuario )


export default authRouter;
