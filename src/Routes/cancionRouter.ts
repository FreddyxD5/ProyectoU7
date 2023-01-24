import { Router } from "express";
import { validateAuthorizationCanciones } from "../middleware/authMiddleware";

import * as cancionController from "../controller/cancionController";

const cancionRouter: Router = Router();

cancionRouter.get("/", validateAuthorizationCanciones,cancionController.findAll);
cancionRouter.post("/", cancionController.crearCancion);
cancionRouter.put("/:id",cancionController.actualizarCancion);
cancionRouter.delete("/:id",cancionController.borrarCancion);
cancionRouter.get("/:id", cancionController.findID);


export default cancionRouter;