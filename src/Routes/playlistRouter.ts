import { Router } from "express";
import { crear_playlist, añadir_cancion,playlist_info, eliminar_cancion, eliminar_playlist,datos_m2m } from "../controller/playlistController";

const playlist_router = Router()


playlist_router.get('/all',datos_m2m)
playlist_router.post('/crear', crear_playlist)
playlist_router.post('/add_song', añadir_cancion)
playlist_router.delete('/delete_song', eliminar_cancion)
playlist_router.delete('/delete_playlist/:id', eliminar_playlist)
playlist_router.get('/:id', playlist_info)

export default playlist_router;