import userRouter from "./Routes/userRouter";
import cancionRouter from "./Routes/cancionRouter"
import playlist_router from "./Routes/playlistRouter";

import express, {type  Application } from "express";
const PORT = process.env.PORT || 5000;

const server: Application = express()
server.use(express.json())

//Rutas de la api
server.use('/api/v1/users',userRouter)
server.use('/api/v1/users/:id',userRouter)
server.use('/api/v1/songs',cancionRouter)
server.use('/api/v1/songs/:id',cancionRouter)
server.use('/api/v1/playlist', playlist_router)



server.get('/', (req, res)=>{
    res.json({
        "status_code":200,
        "response":"Mi index"
    })
})



