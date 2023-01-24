import server from "./server";
import userRouter from "./Routes/userRouter";
import cancionRouter from "./Routes/cancionRouter"
import playlist_router from "./Routes/playlistRouter";
import auth_router from "./Routes/authRouter"


const PORT = process.env.PORT || 5000;


//Rutas de la api
server.use('/api/v1/users',userRouter)
server.use('/api/v1/songs',cancionRouter)
server.use('/api/v1/playlist', playlist_router)
server.use('/api/v1/auth', auth_router)


server.get('/', (req, res)=>{
    res.json({
        "status_code":200,
        "response":"Mi index"
    })
})

server.listen(PORT, ()=>{console.log(`Servidor ejecutandose en http://localhost:${PORT}`)})


