"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.get("/user_list", userController_1.findAllUsers);
userRouter.get("/user_playlist", userController_1.obtener_usuarios_con_playlist);
userRouter.post("/", userController_1.crearUsuario);
userRouter.put("/:id", userController_1.actualizarUsuario);
userRouter.delete("/:id", userController_1.borrarUsuario);
userRouter.get("/:id", userController_1.findByID);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map