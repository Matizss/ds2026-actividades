import type { Rol } from "../generated/prisma/client";

export {};

declare global {
  namespace Express {
    interface Request {
      usuario?: { id: number; rol: Rol };
    }
  }
}