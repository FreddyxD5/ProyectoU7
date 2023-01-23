"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionController_1 = require("../controller/cancionController");
const cancionRouter = (0, express_1.Router)();
cancionRouter.get("/", cancionController_1.findAll);
cancionRouter.post("/", cancionController_1.crearCancion);
cancionRouter.put("/:id", cancionController_1.actualizarCancion);
cancionRouter.delete("/:id", cancionController_1.borrarCancion);
cancionRouter.get("/:id", cancionController_1.findID);
exports.default = cancionRouter;
//# sourceMappingURL=cancionRouter.js.map