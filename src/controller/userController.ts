import { Request, Response } from "express";
import prisma from "../prismaclient"


//Obtener todos los usuarios
export const findAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const usuario = await prisma.usuario.findMany();
  
      res.status(200).json({
        ok: true,
        data: usuario,
      });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };




export const crearUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
  
      const usuario = await prisma.usuario.create({data});
  
      res.status(201).json({
        message: "Usuario creado correctamente",
        user:usuario
      });
    } catch (error) {
      res.status(500).json({message: error });
    }
  };

export const borrarUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
      const id_user = Number(req.params.id);
      const numUsuarios = await prisma.usuario.count({ where: { id_user } });
  
      if (numUsuarios === 0) {
        res.status(404).json({message: "El usuario no existe" });
        return;
      }
  
      await prisma.usuario.delete({ where: { id_user } });
  
      res.json({message: "El usuario  ha sido eliminada correctamente"});
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
        res.status(404).json({ ok: false, message: "El usuario no existe" });
        return;
      }
  
      await prisma.usuario.update({
        where: { id },
        data
      });
  
      res.json({ ok: true, message: "El usuario ha sido actualizada correctamente" });
    } catch (error) {
      res.status(500).json({message: error });
    }
  };
  
  
  //Leer una usuario por id
  export const findID = async (req: Request, res: Response): Promise<void> => {
    try {
      const id_user = Number(req.params.id);      
  
      const user = await prisma.usuario.findUnique({ where: { id:id_user } });
      
      if (!user) {
        res.status(404).json({message: "Usuario no encontrado." });
      }
      else {
         res.status(200).json({data: user })
      }
     ;
  
    } catch (error) {
      console.log(error)
      res.status(500).json({message: error });
    } 
  };
  
