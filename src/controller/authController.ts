import { Request, Response } from "express";
import prisma from "../prismaclient"

import {default as bcrypt } from "bcryptjs"
import jwt, {Secret, JwtPayload} from 'jsonwebtoken'

//Login user
export const login = async(req:Request, res:Response):Promise<void> =>{
    const data = req.body
    try{
      const user = await prisma.usuario.findUnique({where:{email:data['email']}})
      if (!user){
        res.status(203).json({message:"Este usuario no esta registrado."})
      }else{
        const isMatch = bcrypt.compareSync(data['password'], user.password)
        if(isMatch){        
          const token = jwt.sign(data, process.env.SECRET_KEY || 'llave_secreta', {expiresIn:'2h'})        
          res.status(200).json({email:data.email,token})
        }else{
          res.status(400).json({message:"Las contraseñas no coinciden"})
        }      
      }    
      
    }catch(e){
      res.status(400).json({message:"No se ha podido inciar session."})
    }
  
  }