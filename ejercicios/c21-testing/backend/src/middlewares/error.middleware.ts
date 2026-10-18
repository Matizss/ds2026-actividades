import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/client";

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: "Datos inválidos",
      detalles: err.issues.map(i => ({ campo: i.path.join("."), mensaje: i.message })),
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": {
        const campo = (err.meta?.target as string[] | undefined)?.join(", ") ?? "un campo único";
        return res.status(409).json({ error: `Ya existe un registro con ese ${campo}` });
      }
      case "P2025":
        return res.status(404).json({ error: "Registro no encontrado" });
      case "P2003": {
        const campo = (err.meta?.field_name as string | undefined) ?? "una referencia";
        return res.status(409).json({ error: `No se puede completar la operación: ${campo} no existe` });
      }
      default:
        console.error(err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  console.error(err);
  return res.status(500).json({ error: "Error interno del servidor" });
};