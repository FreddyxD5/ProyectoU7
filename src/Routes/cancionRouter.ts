import { Router } from "express";

import { findAll, crearCancion,borrarCancion, actualizarCancion, findID } from "../controller/cancionController";

const cRouter: Router = Router();

cRouter.get("/", findAll);
cRouter.post("/", crearCancion);
cRouter.delete("/",borrarCancion);
cRouter.put("/",actualizarCancion);
cRouter.get("/:id", findID);

export default cRouter;