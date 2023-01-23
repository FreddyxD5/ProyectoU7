"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findID = exports.actualizarUsuario = exports.borrarUsuario = exports.crearUsuario = exports.findAll = void 0;
const client_1 = require("@prisma/client");
//read
const findAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield prisma.usuario.findMany();
        res.status(200).json({
            ok: true,
            data: usuario,
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
exports.findAll = findAll;
//create
const prisma = new client_1.PrismaClient();
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield prisma.usuario.create({ data });
        res.status(201).json({ ok: true, message: "Usuario creado correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
exports.crearUsuario = crearUsuario;
//delete
const borrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const numUsuarios = yield prisma.usuario.count({ where: { id } });
        if (numUsuarios === 0) {
            res.status(404).json({ ok: false, message: "El usuario no existe" });
            return;
        }
        yield prisma.usuario.delete({ where: { id } });
        res.json({ ok: true, message: "El usuario  ha sido eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
exports.borrarUsuario = borrarUsuario;
//update
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const data = req.body;
        const UsuarioExiste = yield prisma.usuario.count({ where: { id } });
        if (!UsuarioExiste) {
            res.status(404).json({ ok: false, message: "El usuario no existe" });
            return;
        }
        yield prisma.usuario.update({
            where: { id },
            data
        });
        res.json({ ok: true, message: "El usuario ha sido actualizada correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
exports.actualizarUsuario = actualizarUsuario;
//Leer una usuario por id
const findID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const idnu = Number(id);
        const user = yield prisma.usuario.findUnique({ where: { id: idnu } });
        if (!user) {
            res.status(404).json({ ok: false, message: "Usuario not found" });
        }
        else {
            res.status(200).json({ ok: true, data: user });
        }
        ;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, message: error });
    }
});
exports.findID = findID;
//# sourceMappingURL=userController.js.map