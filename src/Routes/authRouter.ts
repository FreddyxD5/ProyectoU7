import { Router } from "express";
import * as authController from "../controller/authController";
import { validateAuthorization } from "../middleware/authMiddleware";


const authRouter: Router = Router();

authRouter.post('/login', authController.login)


export default authRouter;
