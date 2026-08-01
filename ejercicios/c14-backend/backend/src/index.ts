import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.json({ mensaje: "La API de la libreria esta funcionando con docker, actualiza sin rebuild" });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  img: string;
  descripcion: string;
}

const libros: Libro[] = [
  {
    "id": 1,
    "titulo": "El principito",
    "autor": "Antoine de Saint-Exupéry",
    "img": "../frontend/public/img/principito.png",
    "descripcion": "Un clásico que explora la amistad, el amor y el sentido de la vida a través de un pequeño príncipe."
  },
  {
    "id": 2,
    "titulo": "1984",
    "autor": "George Orwell",
    "img": "../frontend/public/img/1984.png",
    "descripcion": "Una novela distópica sobre un futuro dominado por un régimen totalitario y la vigilancia constante."
  },
  {
    "id": 3,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "img": "../frontend/public/img/donquijote.png",
    "descripcion": "La historia de un hidalgo que pierde la cordura y sale a vivir aventuras como caballero andante."
  },
  {
    "id": 4,
    "titulo": "Fahrenheit 451",
    "autor": "Ray Bradbury",
    "img": "../frontend/public/img/451.png",
    "descripcion": "Un mundo donde los libros están prohibidos y los bomberos se encargan de quemarlos."
  },
  {
    "id": 5,
    "titulo": "Harry Potter y la piedra filosofal",
    "autor": "J.K. Rowling",
    "img": "../frontend/public/img/piedrafilosofal.png",
    "descripcion": "El inicio de la historia de un joven mago que descubre su destino en el mundo mágico."
  },
  {
    "id": 6,
    "titulo": "Los juegos del hambre",
    "autor": "Suzanne Collins",
    "img": "../frontend/public/img/losjuegosdelhambre.png",
    "descripcion": "Una competencia mortal en un mundo distópico donde los jóvenes luchan por sobrevivir."
  }
];

app.get("/libros", (_req, res) => {
  res.json(libros);
});


interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

const autores: Autor[] = [
  { id: 1, nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { id: 2, nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
  { id: 3, nombre: "Ernesto Sabato", nacionalidad: "Argentina" },
];

app.get("/autores", (_req, res) => {
  res.json(autores);
});