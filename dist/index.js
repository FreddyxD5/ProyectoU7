"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const userRouter_1 = __importDefault(require("./Routes/userRouter"));
const cancionRouter_1 = __importDefault(require("./Routes/cancionRouter"));
const playlistRouter_1 = __importDefault(require("./Routes/playlistRouter"));
const authRouter_1 = __importDefault(require("./Routes/authRouter"));
const PORT = process.env.PORT || 5000;
//Rutas de la api
server_1.default.use('/api/v1/users', userRouter_1.default);
server_1.default.use('/api/v1/songs', cancionRouter_1.default);
server_1.default.use('/api/v1/playlist', playlistRouter_1.default);
server_1.default.use('/api/v1/auth', authRouter_1.default);
server_1.default.get('/', (req, res) => {
    res.json({
        "status_code": 200,
        "response": "Mi index"
    });
});
server_1.default.listen(PORT, () => { console.log(`Servidor ejecutandose en http://localhost:${PORT}`); });
//# sourceMappingURL=index.js.map