import cRouter from "./Routes/userRouter";

import express, {type  Application } from "express";
const PORT = process.env.PORT || 5000;

const server: Application = express()
server.use(express.json())

server.use('/api/v1/users',cRouter)
server.use('/api/v1/users/:id',cRouter)


server.get('/', (req, res)=>{
    res.json({
        "status_code":200,
        "response":"Mi index"
    })
})



