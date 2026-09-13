import { z } from 'zod';

export const libroSchema = z.object({
  titulo: z.string().trim().min(1, 'El título es obligatorio').max(80, 'El título no puede superar los 80 caracteres'),
  autor: z.string().trim().min(1, 'El autor es obligatorio').max(80, 'El nombre del autor no puede superar los 80 caracteres'),
  descripcion: z.string().trim().min(1, 'La descripción es obligatoria'),
  precio: z.coerce.number().positive('El precio debe ser mayor a 0'),
  disponible: z.boolean(),
});

export type LibroValidado = z.infer<typeof libroSchema>;