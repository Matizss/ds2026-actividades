import express from "express";
import libroRoutes from "./routes/libro.routes";
import autorRoutes from "./routes/autor.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";
import cors from "cors" ;

const app = express();
const PORT = 3000;

const corsOptions = { origin: [process .env.FRONTEND_URL ?? "http://localhost:5173" ]};

app.use(cors(corsOptions ));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ mensaje: "La API de la libreria esta funcionando con docker, actualiza sin rebuild" });
});

app.use("/api/auth", authRoutes);
app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// SIEMPRE al final, después de todas las rutas.
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});