import {Request, Response} from "express"
import prisma from "../prismaclient"


//Crear una playlist asociada a un usuario
export const crear_playlist = async (req:Request, res:Response):Promise<void> =>{
    const datos = req.body    
    try{
        const user = await prisma.usuario.findUnique({where:{id:Number(datos.userId)}}).then(Boolean)
        if (user){
            const playlist = await prisma.playlist.create({data:{
                name:datos.name,
                user:{
                    connect:{ id : Number(datos.userId)}
                }    
            }})
            if (playlist!== null){
                res.status(201).json(playlist)            
            }

        }else{
            res.status(400).json({message:"El usuario no existe"})
        }                
    }catch(e){
        res.status(400).json({"message":"Ha ocurrido un error en el sevidor intente más tarde"})
    }    
}

//Obtener playlist y sus canciones
export const playlist_info = async(req:Request, res:Response):Promise<void> =>{    
    const playlist_id = Number(req.params.id)    
    try{
        //consultamos si existe la Playlist      
        const info_playlist = await prisma.playlist.findUnique({
            where:{
                id:playlist_id
            }
        })                
        if(!info_playlist){
            res.status(400).json({message:"No hay registro de una playlist con el id proporcionado."})
        }else{
            //Encontramos todas las canciones asociadas
            const datos_playlist_song =  await prisma.playlistCancion.findMany({
                where:{
                playlistId: playlist_id                
            }})
                        
            //Extraemos el id de las canciones asociadas a la playlist
            const canciones = datos_playlist_song.map((item:any)=>item.songId)
                
            //Consultamos la data de nuestras canciones
            const song_info = await prisma.cancion.findMany({
                where:{
                    id:{
                        in:canciones
                    }
                } 
            });                       
            //Armamos nuestro diccionario        
            if (info_playlist!== null){        
                let data_json = info_playlist;
                if (song_info!== null){
                    data_json['songs'] = song_info; 
                }                                    
                res.status(201).json(data_json)                    
            }  
        }
        
    }catch(e){        
        res.status(400).json({"message":"Ha ocurrido un error en el servidor."})
    }
} 
 
//Añadir canciones a una playlist
export const añadir_cancion = async(req:Request, res:Response):Promise<void> =>{
    const datos = req.body    
    try{
        const playlist_song = await prisma.playlistCancion.findUnique({
            where:{
                playlistId_songId:{
                    playlistId:Number(datos.playlistId),
                    songId:Number(datos.songId)
                }
            }
        }).then(Boolean);        
        if (playlist_song){
            res.status(400).json({message:"Usted ya tiene esta cancion en su playlist."})
        }else{
            const datos_playlist =  await prisma.playlistCancion.create({data:{
                playlist:{
                    connect:{ id:Number(datos.playlistId)}
                },
                song:{
                    connect:{ id:Number(datos.songId)}
                }
            }})
        
            if (datos_playlist!== null){
                res.status(201).json(datos_playlist)
            }
        }        

    }catch(e){
        res.status(400).json({
            message:"La cancion que intenta añadir ya no se encuentra disponible."
        });
    }
}
 

//Eliminar canciones de la playlist
export const eliminar_cancion = async(req:Request, res:Response):Promise<void> =>{
    const datos = req.body    
    try{
        const delete_song = await prisma.playlistCancion.delete({
            where:{
                playlistId_songId:{
                    playlistId: Number(datos.playlistId),
                    songId: Number(datos.songId)
                }                        
            }
        })
        res.status(201).json({"message":"Eliminado correctamente!", "song":delete_song})
    }catch(e){
        res.status(400).json({"message":"La cancion no se encuentra en la playlist"})
    }    
} 


//Eliminar Playlist
export const eliminar_playlist = async(req:Request, res:Response):Promise<void> =>{    
    const id_playlist = Number(req.params.id)       
    try{        
        const playlist_exists = await prisma.playlist.findUnique({where:{id:id_playlist}}).then(Boolean)
        if (playlist_exists){
            //Luego eliminamos la playlist
            const delete_playlist = await prisma.playlist.delete({
                where:{
                    id:id_playlist
                }
            })
            res.status(200).json({
                "message":"Playlist eliminada correctamente",
                "playlist":delete_playlist
            })
        }else{
            res.status(400).json({message:"La playlist que intenta eliminar no existe."})
        }
        
    }catch(e){                
        res.status(500).json({
            "message":"No se ha podido eliminar la playlist intente más tarde.",
            
        })
    }

}

export const datos_m2m = async(req:Request, res:Response):Promise<void> =>{        
    const data = await prisma.playlistCancion.findMany({})
    res.json(data)
}