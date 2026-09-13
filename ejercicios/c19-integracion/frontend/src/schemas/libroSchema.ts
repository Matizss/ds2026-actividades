import { z } from 'zod';

export const libroSchema = z.object({
  titulo: z.string().trim().min(1, 'El título es obligatorio').max(200, 'El título no puede superar los 200 caracteres'),
  descripcion: z.string().trim().min(1, 'La descripción es obligatoria'),
  precio: z.coerce.number().int('El precio debe ser un número entero').positive('El precio debe ser mayor a 0'),
  img: z.string().trim().min(1, 'La imagen es obligatoria'),
  disponible: z.boolean(),
  autorId: z.coerce.number().int().positive('Elegí un autor'),
});

export type LibroValidado = z.infer<typeof libroSchema>;