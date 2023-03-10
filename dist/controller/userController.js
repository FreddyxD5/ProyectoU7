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
exports.obtener_usuarios_con_playlist = exports.actualizarUsuario = exports.borrarUsuario = exports.findByID = exports.findAllUsers = exports.login = exports.crearUsuario = void 0;
const prismaclient_1 = __importDefault(require("../prismaclient"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY_VARIABLE = process.env.ACCESS_SECRET_TOKEN;
//Crear usuario
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        data['password'] = bcryptjs_1.default.hashSync(data['password'], 6);
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
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    try {
        const user = yield prismaclient_1.default.usuario.findUnique({ where: { email: data['email'] } });
        if (!user) {
            res.status(203).json({ message: "Este usuario no esta registrado." });
        }
        else {
            const isMatch = bcryptjs_1.default.compareSync(data['password'], user.password);
            if (isMatch) {
                const token = jsonwebtoken_1.default.sign(data, process.env.SECRET_KEY || 'llave_secreta', { expiresIn: '2h' });
                res.status(200).json({ email: data.email, token });
            }
            else {
                res.status(400).json({ message: "Las contrase??as no coinciden" });
            }
        }
    }
    catch (e) {
        res.status(400).json({ message: "No se ha podido inciar session." });
    }
});
exports.login = login;
//Obtener todos los usuarios
const findAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield prismaclient_1.default.usuario.findMany();
        if (usuario.length < 1) {
            res.status(200).json({
                message: "Aun no hay usuarios registrados."
            });
        }
        else {
            res.status(200).json({
                data: usuario,
            });
        }
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