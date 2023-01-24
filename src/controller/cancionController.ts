import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//read
export const findAll = async (_req: Request, res: Response): Promise<void> => {
    console.log('todas las canciones')
    console.log(res.locals.autorizado)
    try {      
      if (res.locals.autorizado){
        var canciones = await prisma.cancion.findMany();
      }else{
        var canciones = await prisma.cancion.findMany({where:{
          privado:false
        }})
      }
      
  
      res.status(200).json({        
        canciones
      });
    } catch (error) {
      res.status(500).json({message: error });
    }
  };




//create
export const crearCancion = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const cancion = await prisma.cancion.create({data});

    res.status(201).json({
      message: "Canción creada correctamente",
      song:cancion
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error });
  }
};



//delete
export const borrarCancion = async (req: Request, res: Response): Promise<void> => {
  try {
    const id  = Number(req.params.id);
    const numCanciones = await prisma.cancion.count({ where: { id } });

    if (numCanciones === 0) {
      res.status(404).json({message: "La canción no existe" });
      return;
    }

    await prisma.cancion.delete({ where: { id } });

    res.json({message: "La canción ha sido eliminada correctamente"});
  } catch (error) {
    res.status(500).json({message: error });
  }
};





//update
export const actualizarCancion = async (req: Request, res: Response): Promise<void> => {
  try {
    const id  = Number(req.params.id);
    const data = req.body;
    const cancionExiste = await prisma.cancion.count({ where: { id } });

    if (!cancionExiste) {
      res.status(404).json({message: "La canción no existe" });
      return;
    }

    const cancion = await prisma.cancion.update({
      where: { id },
      data
    });

    res.json({message: "La canción ha sido actualizada correctamente", song:cancion});
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
      res.status(404).json({message: "Cancion no encontrada" });
    }
    else {
       res.status(200).json({cancion: song})
    }
   ;

  } catch (error) {
    console.log(error)
    res.status(500).json({message: error });
  } 
};