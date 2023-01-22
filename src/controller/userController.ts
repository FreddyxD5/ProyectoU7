import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

//read
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



//create
const prisma = new PrismaClient()
export const crearUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
  
      await prisma.usuario.create({data});
  
      res.status(201).json({ ok: true, message: "Usuario creado correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };



//delete
export const borrarUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.body;
      const numUsuarios = await prisma.usuario.count({ where: { id } });
  
      if (numUsuarios === 0) {
        res.status(404).json({ ok: false, message: "El usuario no existe" });
        return;
      }
  
      await prisma.usuario.delete({ where: { id } });
  
      res.json({ ok: true, message: "El usuario  ha sido eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
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
      res.status(500).json({ ok: false, message: error });
    }
  };
  
  
  //Leer una usuario por id
  export const findID = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const idnu = Number(id);
  
      const user = await prisma.usuario.findUnique({ where: { id:idnu } });
      
      if (!user) {
        res.status(404).json({ ok: false, message: "Usuario not found" });
      }
      else {
         res.status(200).json({ ok: true, data: user })
      }
     ;
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ ok: false, message: error });
    } 
  };
  
