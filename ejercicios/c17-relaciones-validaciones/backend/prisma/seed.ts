import { prisma } from "../src/config/prisma";

const autores = [
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { nombre: "George Orwell", nacionalidad: "Reino Unido" },
  { nombre: "Miguel de Cervantes", nacionalidad: "España" },
  { nombre: "Ray Bradbury", nacionalidad: "Estados Unidos" },
  { nombre: "J.K. Rowling", nacionalidad: "Reino Unido" },
  { nombre: "Suzanne Collins", nacionalidad: "Estados Unidos" },
];

const categorias = [
  { nombre: "Novela" },
  { nombre: "Clásico" },
  { nombre: "Distopía" },
  { nombre: "Fantástico" },
];

const libros = [
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    descripcion:
      "Un clásico que explora la amistad, el amor y el sentido de la vida a través de un pequeño príncipe.",
    precio: 4500,
    img: "/img/principito.png",
    disponible: true,
    cats: ["Novela", "Clásico"],
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    descripcion:
      "Una novela distópica sobre un futuro dominado por un régimen totalitario y la vigilancia constante.",
    precio: 5200,
    img: "/img/1984.png",
    disponible: true,
    cats: ["Novela", "Distopía"],
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    descripcion:
      "La historia de un hidalgo que pierde la cordura y sale a vivir aventuras como caballero andante.",
    precio: 6800,
    img: "/img/donquijote.png",
    disponible: true,
    cats: ["Novela", "Clásico"],
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    descripcion:
      "Un mundo donde los libros están prohibidos y los bomberos se encargan de quemarlos.",
    precio: 4900,
    img: "/img/451.png",
    disponible: true,
    cats: ["Novela", "Distopía"],
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    descripcion:
      "El inicio de la historia de un joven mago que descubre su destino en el mundo mágico.",
    precio: 7300,
    img: "/img/piedrafilosofal.png",
    disponible: true,
    cats: ["Novela", "Fantástico"],
  },
  {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    descripcion:
      "Una competencia mortal en un mundo distópico donde los jóvenes luchan por sobrevivir.",
    precio: 5600,
    img: "/img/losjuegosdelhambre.png",
    disponible: true,
    cats: ["Novela", "Distopía"],
  },
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map((nombre) => ({ nombre })) },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });