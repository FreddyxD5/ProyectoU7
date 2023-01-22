import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//read
export const findAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const usuarios = await prisma.cancion.findMany();
  
      res.status(200).json({
        ok: true,
        data: usuarios,
      });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };




//create
export const crearName = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    await prisma.usuarios.create({data});

    res.status(201).json({ ok: true, message: "Nombre creada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

//create
export const crearEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
  
      await prisma.usuarios.create({data});
  
      res.status(201).json({ ok: true, message: "Email creado correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

  //create
export const crearPassword = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
  
      await prisma.usuarios.create({data});
  
      res.status(201).json({ ok: true, message: "Password creado correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };
  