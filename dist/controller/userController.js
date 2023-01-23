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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtener_usuarios_con_playlist = exports.actualizarUsuario = exports.borrarUsuario = exports.crearUsuario = exports.findByID = exports.findAllUsers = void 0;
const prismaclient_1 = __importDefault(require("../prismaclient"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
//Obtener todos los usuarios
const findAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield prismaclient_1.default.usuario.findMany();
        res.status(200).json({
            data: usuario,
        });
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.findAllUsers = findAllUsers;
//Leer una usuario por id
const findByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_user = Number(req.params.id);
    try {
        const user = yield prismaclient_1.default.usuario.findUnique({ where: { id: id_user } });
        if (!user) {
            res.status(404).json({ message: "Usuario no encontrado." });
        }
        else {
            res.status(200).json({ data: user });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.findByID = findByID;
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        data['password'] = bcryptjs_1.default.hashSync(data['password'], 6);
        console.log(data);
        const usuario = yield prismaclient_1.default.usuario.create({ data });
        res.status(201).json({
            message: "Usuario creado correctamente",
            user: usuario
        });
    }
    catch (error) {
        res.status(400).json({ message: "Ha ocurrido un error creando el usuario" });
    }
});
exports.crearUsuario = crearUsuario;
const borrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_user = Number(req.params.id);
        const numUsuarios = yield prismaclient_1.default.usuario.count({ where: { id: id_user } });
        if (numUsuarios === 0) {
            res.status(404).json({ message: "El usuario no existe" });
            return;
        }
        yield prismaclient_1.default.usuario.delete({ where: { id: id_user } });
        res.json({ message: "El usuario  ha sido eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.borrarUsuario = borrarUsuario;
//update
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const data = req.body;
        const UsuarioExiste = yield prismaclient_1.default.usuario.count({ where: { id } });
        if (!UsuarioExiste) {
            res.status(404).json({ message: "El usuario no existe" });
            return;
        }
        const usuario = yield prismaclient_1.default.usuario.update({
            where: { id },
            data
        });
        res.json({ message: "El usuario ha sido actualizada correctamente", user: usuario });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.actualizarUsuario = actualizarUsuario;
const obtener_usuarios_con_playlist = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prismaclient_1.default.usuario.findMany({
            include: {
                playlists: true
            }
        });
        console.log(users);
        if (users !== null) {
            res.status(200).json({
                users
            });
        }
    }
    catch (e) {
        res.status(400).json({ "message": "Algo ha ocurrido porfavor intente nuevamente." });
    }
});
exports.obtener_usuarios_con_playlist = obtener_usuarios_con_playlist;
//# sourceMappingURL=userController.js.map