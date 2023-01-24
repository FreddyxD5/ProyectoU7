import e, { Request, Response } from "express";
import prisma from "../prismaclient"

import {default as bcrypt } from "bcryptjs"
import jwt, {Secret, JwtPayload} from 'jsonwebtoken'


const SECRET_KEY_VARIABLE = process.env.ACCESS_SECRET_TOKEN
//Obtener todos los usuarios
export const findAllUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
      const usuario = await prisma.usuario.findMany();
      if (usuario.length < 1) {
        res.status(200).json({
          message:"Aun no hay usuarios registrados."
        })
        
      }else{
        res.status(200).json({       
          data: usuario,
        });            
      }
            
    } catch (error) {
      res.status(400).json({message: error });
    }
  };

//Leer una usuario por id
export const findByID = async (req: Request, res: Response): Promise<void> => {
  const id_user = Number(req.params.id);  
  try {            

    const user = await prisma.usuario.findUnique({ where: { id:id_user } });
    
    if (!user) {
      res.status(404).json({message: "Usuario no encontrado." });
    }
    else {
        res.status(200).json({data: user })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error });
  } 
};
  

export const crearUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
      data['password'] = bcrypt.hashSync(data['password'], 6)    
      console.log(data)
      const usuario = await prisma.usuario.create({data});
  
      res.status(201).json({
        message: "Usuario creado correctamente",
        user:usuario
      });
    } catch (error) {  
      res.status(400).json({message: "Ha ocurrido un error creando el usuario" });
    }    
  };

export const borrarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const id_user = Number(req.params.id);
    const numUsuarios = await prisma.usuario.count({ where: { id:id_user } });

    if (numUsuarios === 0) {
      res.status(404).json({message: "El usuario no existe" });
      return;
    }

    await prisma.usuario.delete({ where: { id:id_user } });

    res.json({message: "El usuario  ha sido eliminado correctamente"});
  } catch (error) {
    res.status(500).json({message: error });
  }
};
  
  
  //update
export const actualizarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;
    const data = req.body;
    const UsuarioExiste = await prisma.usuario.count({ where: { id } });

    if (!UsuarioExiste) {
      res.status(404).json({message: "El usuario no existe" });
      return;
    }

    const usuario =await prisma.usuario.update({
      where: { id },
      data
    });

    res.json({message: "El usuario ha sido actualizada correctamente", user:usuario});
  } catch (error) {
    res.status(500).json({message: error });
  }
};



export const obtener_usuarios_con_playlist = async (_req:Request, res:Response):Promise<void> =>{        
  
  try{
      const users = await prisma.usuario.findMany({
          include:{
            playlists:true
          }
      })        
      console.log(users)
      if(users!== null){
          res.status(200).json({
              users
          })
      } 
  }catch(e){                                
    res.status(400).json({"message":"Algo ha ocurrido porfavor intente nuevamente."})
  }     
}
