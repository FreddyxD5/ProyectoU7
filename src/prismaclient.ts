//Instancia de prisma para la conexion a la base de datos
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export default prisma