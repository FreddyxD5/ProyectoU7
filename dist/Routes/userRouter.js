"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controller/usuarioController");
const cRouter = (0, express_1.Router)();
cRouter.post("/", usuarioController_1.crearEmail);
cRouter.post("/", usuarioController_1.crearPassword);

exports.default = cRouter;
//# sourceMappingURL=cancionRouter.js.map