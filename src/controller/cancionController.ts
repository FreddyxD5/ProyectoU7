import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//read
export const findAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const canciones = await prisma.cancion.findMany();
  
      res.status(200).json({
        ok: true,
        data: canciones,
      });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };




//create
export const crearCancion = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    await prisma.cancion.create({data});

    res.status(201).json({ ok: true, message: "Cancion creada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};



//delete
export const borrarCancion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;
    const numCanciones = await prisma.cancion.count({ where: { id } });

    if (numCanciones === 0) {
      res.status(404).json({ ok: false, message: "La canción no existe" });
      return;
    }

    await prisma.cancion.delete({ where: { id } });

    res.json({ ok: true, message: "La canción ha sido eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};





//update
export const actualizarCancion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;
    const data = req.body;
    const cancionExiste = await prisma.cancion.count({ where: { id } });

    if (!cancionExiste) {
      res.status(404).json({ ok: false, message: "La canción no existe" });
      return;
    }

    await prisma.cancion.update({
      where: { id },
      data
    });

    res.json({ ok: true, message: "La canción ha sido actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};


//Leer una canción por id
export const findID = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const idnu = Number(id);

    const song = await prisma.cancion.findUnique({ where: { id:idnu } });
    
    if (!song) {
      res.status(404).json({ ok: false, message: "Cancion not found" });
    }
    else {
       res.status(200).json({ ok: true, data: song })
    }
   ;

  } catch (error) {
    console.log(error)
    res.status(500).json({ ok: false, message: error });
  } 
};