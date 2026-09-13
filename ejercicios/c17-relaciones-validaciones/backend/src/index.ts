import express from "express";
import libroRoutes from "./routes/libro.routes";
import autorRoutes from "./routes/autor.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ mensaje: "La API de la libreria esta funcionando con docker, actualiza sin rebuild" });
});

app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);

// SIEMPRE al final, después de todas las rutas.
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});