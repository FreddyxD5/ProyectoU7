import { Router } from "express";

import { findAll, crearCancion,borrarCancion, actualizarCancion, findID } from "../controller/cancionController";

const cancionRouter: Router = Router();

cancionRouter.get("/", findAll);
cancionRouter.post("/", crearCancion);
cancionRouter.delete("/",borrarCancion);
cancionRouter.put("/",actualizarCancion);
cancionRouter.get("/:id", findID);

export default cancionRouter;