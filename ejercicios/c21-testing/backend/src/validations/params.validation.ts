import { z } from "zod";

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive("El id debe ser un número positivo"),
});

export type IdParam = z.infer<typeof idParamSchema>;