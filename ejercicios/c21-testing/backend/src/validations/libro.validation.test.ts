import { describe, it, expect } from "vitest";
import { libroCreateSchema } from "./libro.validation";
import { idParamSchema } from "./params.validation";

const libroValido = {
  titulo: "Rayuela",
  descripcion: "Novela de Julio Cortázar",
  precio: 7000,
  img: "https://img/r.jpg",
  autorId: 1,
};

describe("libroCreateSchema", () => {
  it("acepta un libro válido", () => {
    expect(libroCreateSchema.safeParse(libroValido).success).toBe(true);
  });

  it("rechaza precio negativo", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, precio: -5 });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].path).toEqual(["precio"]);
  });

  it("recorta espacios del título", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, titulo: "  Rayuela  " });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.titulo).toBe("Rayuela");
  });
});

describe("idParamSchema", () => {
  it("convierte el id de string a número", () => {
    const r = idParamSchema.safeParse({ id: "42" });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.id).toBe(42);
  });
});