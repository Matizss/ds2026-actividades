import { prisma } from "../config/prisma";
import { Libro, Prisma } from "../generated/prisma/client";
import type { LibroCreateInput, LibroUpdateInput } from "../validations/libro.validation";

export type LibroConAutor = Prisma.LibroGetPayload<{ include: { autor: true } }>;
export type LibroConDetalle = Prisma.LibroGetPayload<{ include: { autor: true; categorias: true } }>;

export async function findAll(disponible?: boolean): Promise<LibroConAutor[]> {
  return prisma.libro.findMany({
    where: { disponible },
    include: { autor: true },
  });
}

export async function findById(id: number): Promise<LibroConDetalle | null> {
  return prisma.libro.findUnique({
    where: { id },
    include: { autor: true, categorias: true },
  });
}

export async function create(datos: LibroCreateInput): Promise<LibroConDetalle> {
  const { categoriaIds, ...resto } = datos;
  return prisma.libro.create({
    data: {
      ...resto,
      categorias: categoriaIds
        ? { connect: categoriaIds.map((id) => ({ id })) }
        : undefined,
    },
    include: { autor: true, categorias: true },
  });
}

export async function update(id: number, datos: LibroUpdateInput): Promise<LibroConDetalle | null> {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return null;

  const { categoriaIds, ...resto } = datos;
  return prisma.libro.update({
    where: { id },
    data: {
      ...resto,
      categorias: categoriaIds
        ? { set: categoriaIds.map((id) => ({ id })) }
        : undefined,
    },
    include: { autor: true, categorias: true },
  });
}

export async function remove(id: number): Promise<boolean> {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return false;
  await prisma.libro.delete({ where: { id } });
  return true;
}