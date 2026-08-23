import { Libro } from "../types/libro.types";

const libros: Libro[] = [
  {
    "id": 1,
    "titulo": "El principito",
    "autor": "Antoine de Saint-Exupéry",
    "img": "../frontend/public/img/principito.png",
    "descripcion": "Un clásico que explora la amistad, el amor y el sentido de la vida a través de un pequeño príncipe.",
    "disponible": true
  },
  {
    "id": 2,
    "titulo": "1984",
    "autor": "George Orwell",
    "img": "../frontend/public/img/1984.png",
    "descripcion": "Una novela distópica sobre un futuro dominado por un régimen totalitario y la vigilancia constante.",
    "disponible": true
  },
  {
    "id": 3,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "img": "../frontend/public/img/donquijote.png",
    "descripcion": "La historia de un hidalgo que pierde la cordura y sale a vivir aventuras como caballero andante.",
    "disponible": true
  },
  {
    "id": 4,
    "titulo": "Fahrenheit 451",
    "autor": "Ray Bradbury",
    "img": "../frontend/public/img/451.png",
    "descripcion": "Un mundo donde los libros están prohibidos y los bomberos se encargan de quemarlos.",
    "disponible": true
  },
  {
    "id": 5,
    "titulo": "Harry Potter y la piedra filosofal",
    "autor": "J.K. Rowling",
    "img": "../frontend/public/img/piedrafilosofal.png",
    "descripcion": "El inicio de la historia de un joven mago que descubre su destino en el mundo mágico.",
    "disponible": true
  },
  {
    "id": 6,
    "titulo": "Los juegos del hambre",
    "autor": "Suzanne Collins",
    "img": "../frontend/public/img/losjuegosdelhambre.png",
    "descripcion": "Una competencia mortal en un mundo distópico donde los jóvenes luchan por sobrevivir.",
    "disponible": true
  }
];

let proximoId = 7;

export function findAll(disponible?: boolean): Libro[] {
    if (disponible === undefined) return libros;
    return libros.filter(l => l.disponible === disponible);
}

export function findById(id: number): Libro | undefined {
    return libros.find(l => l.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Libro, "id">): Libro | undefined {
  const i = libros.findIndex(libro => libro.id === id);
  if (i === -1) return undefined;
  libros[i] = { id, ...datos };
  return libros[i];
}

export function remove(id: number): boolean {
  const i = libros.findIndex(libro => libro.id === id);
  if (i === -1) return false;
  libros.splice(i, 1);
  return true;
}
