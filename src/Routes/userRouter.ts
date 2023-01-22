import { Router } from "express";

import { findAll, crearEmail,crearName, crearPassword } from "../controller/userController";

const cRouter: Router = Router();


cRouter.post("/", crearName);
cRouter.post("/", crearEmail);
cRouter.post("/", crearPassword);
cRouter.post("/", crearName);
export default cRouter;