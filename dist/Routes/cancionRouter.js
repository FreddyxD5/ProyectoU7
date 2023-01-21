"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionController_1 = require("../controller/cancionController");
const cRouter = (0, express_1.Router)();
cRouter.get("/", cancionController_1.findAll);
cRouter.post("/", cancionController_1.crearCancion);
cRouter.delete("/", cancionController_1.borrarCancion);
cRouter.put("/", cancionController_1.actualizarCancion);
cRouter.get("/:id", cancionController_1.findID);
exports.default = cRouter;
//# sourceMappingURL=cancionRouter.js.map