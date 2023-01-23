"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const userRouter_1 = __importDefault(require("./Routes/userRouter"));

const cancionRouter_1 = __importDefault(require("./Routes/cancionRouter"));

const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 5000;
const server = (0, express_1.default)();
server.use(express_1.default.json());

server.use('/api/v1/users', userRouter_1.default);
server.use('/api/v1/users/:id', userRouter_1.default);

server.use('/api/v1/songs', cancionRouter_1.default);
server.use('/api/v1/songs/:id', cancionRouter_1.default);

server.get('/', (req, res) => {
    res.json({
        "status_code": 200,
        "response": "Mi index"
    });
});
server.listen(PORT, () => { console.log(`Servidor ejecutandose en http://localhost:${PORT}`); });
//# sourceMappingURL=index.js.map