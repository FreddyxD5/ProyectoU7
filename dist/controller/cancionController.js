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
exports.findID = exports.actualizarCancion = exports.borrarCancion = exports.crearCancion = exports.findAll = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//read
const findAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('todas las canciones');
    console.log(res.locals.autorizado);
    try {
        if (res.locals.autorizado) {
            var canciones = yield prisma.cancion.findMany();
        }
        else {
            var canciones = yield prisma.cancion.findMany({ where: {
                    privado: false
                } });
        }
        res.status(200).json({
            canciones
        });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.findAll = findAll;
//create
const crearCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const cancion = yield prisma.cancion.create({ data });
        res.status(201).json({
            message: "Canción creada correctamente",
            song: cancion
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.crearCancion = crearCancion;
//delete
const borrarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const numCanciones = yield prisma.cancion.count({ where: { id } });
        if (numCanciones === 0) {
            res.status(404).json({ message: "La canción no existe" });
            return;
        }
        yield prisma.cancion.delete({ where: { id } });
        res.json({ message: "La canción ha sido eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.borrarCancion = borrarCancion;
//update
const actualizarCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const cancionExiste = yield prisma.cancion.count({ where: { id } });
        if (!cancionExiste) {
            res.status(404).json({ message: "La canción no existe" });
            return;
        }
        const cancion = yield prisma.cancion.update({
            where: { id },
            data
        });
        res.json({ message: "La canción ha sido actualizada correctamente", song: cancion });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
exports.actualizarCancion = actualizarCancion;
//Leer una canción por id
const findID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const idnu = Number(id);
        const song = yield prisma.cancion.findUnique({ where: { id: idnu } });
        if (!song) {
            res.status(404).json({ message: "Cancion no encontrada" });
        }
        else {
            res.status(200).json({ cancion: song });
        }
        ;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.findID = findID;
//# sourceMappingURL=cancionController.js.map