
import cRouter from "./Routes/cancionRouter";
import express, {type  Application } from "express";
const PORT = process.env.PORT || 5000;

const server: Application = express()
server.use(express.json())

server.use('/api/v1/songs',cRouter)
server.use('/api/v1/songs/:id',cRouter)


server.get('/', (req, res)=>{
    res.json({
        "status_code":200,
        "response":"Mi index"
    })
})

server.listen(PORT, ()=>{console.log(`Servidor ejecutandose en http://localhost:${PORT}`)})