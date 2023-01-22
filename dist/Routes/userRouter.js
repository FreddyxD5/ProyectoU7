"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const cRouter = (0, express_1.Router)();
cRouter.post("/", userController_1.crearUsuario);
cRouter.post("/", userController_1.crearUsuario);
cRouter.delete("/", userController_1.borrarUsuario);
cRouter.put("/", userController_1.actualizarUsuario);
cRouter.get("/:id", userController_1.findID);
exports.default = cRouter;
//# sourceMappingURL=userRouter.js.map