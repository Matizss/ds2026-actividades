import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    descripcion: "Un clásico que explora la amistad, el amor y el sentido de la vida a través de un pequeño príncipe.",
    precio: 4500, // TODO: poné el precio real
    img: "/img/principito.png",
    disponible: true,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    descripcion: "Una novela distópica sobre un futuro dominado por un régimen totalitario y la vigilancia constante.",
    precio: 5200, // TODO
    img: "/img/1984.png",
    disponible: true,
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    descripcion: "La historia de un hidalgo que pierde la cordura y sale a vivir aventuras como caballero andante.",
    precio: 6800, // TODO
    img: "/img/donquijote.png",
    disponible: true,
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    descripcion: "Un mundo donde los libros están prohibidos y los bomberos se encargan de quemarlos.",
    precio: 4900, // TODO
    img: "/img/451.png",
    disponible: true,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    descripcion: "El inicio de la historia de un joven mago que descubre su destino en el mundo mágico.",
    precio: 7300, // TODO
    img: "/img/piedrafilosofal.png",
    disponible: true,
  },
  {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    descripcion: "Una competencia mortal en un mundo distópico donde los jóvenes luchan por sobrevivir.",
    precio: 5600, // TODO
    img: "/img/losjuegosdelhambre.png",
    disponible: true,
  },
];

const autores = [
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
  { nombre: "Ernesto Sabato", nacionalidad: "Argentina" },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
}

main();