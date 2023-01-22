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
exports.findID = exports.crearName= exports.crearEmail = exports.findAll = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//read
const findAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield prisma.cancion.findMany();
        res.status(200).json({
            ok: true,
            data: usuarios,
        });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});


//create
const crearName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield prisma.usuarios.create({ data });
        res.status(201).json({ ok: true, message: "Nombre creado correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});


//create
//create
const crearCancion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield prisma.cancion.create({ data });
        res.status(201).json({ ok: true, message: "Cancion creada correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
});
//createLast Session
const crearEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield prisma.usuarios.create({ data });
        res.status(201).json({ ok: true, message: "Email creado correctamente" });
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error });
    }

