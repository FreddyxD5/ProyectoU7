import { Router } from "express";
import { crear_playlist, añadir_cancion,playlist_info, eliminar_cancion, eliminar_playlist } from "../controller/playlistController";

const playlist_router = Router()


playlist_router.post('/create', crear_playlist)
playlist_router.get('/:id', playlist_info)
playlist_router.post('/add_song', añadir_cancion)
playlist_router.delete('/delete_song', eliminar_cancion)
playlist_router.delete('/delete_playlist/:id', eliminar_playlist)

export default playlist_router;