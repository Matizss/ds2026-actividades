import type { Libro } from "../types/libro";

export const libros: (Libro & { id: number; descripcion: string })[] = [
    {
        id: 1,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        img: "/public/img/principito.png",
        descripcion: "Un clásico que explora la amistad, el amor y el sentido de la vida a través de un pequeño príncipe."
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        img: "/public/img/1984.png",
        descripcion: "Una novela distópica sobre un futuro dominado por un régimen totalitario y la vigilancia constante."
    },
    {
        id: 3,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        img: "/public/img/donquijote.png",
        descripcion: "La historia de un hidalgo que pierde la cordura y sale a vivir aventuras como caballero andante."
    },
    {
        id: 4,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        img: "/public/img/451.png",
        descripcion: "Un mundo donde los libros están prohibidos y los bomberos se encargan de quemarlos."
    },
    {
        id: 5,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        img: "/public/img/piedrafilosofal.png",
        descripcion: "El inicio de la historia de un joven mago que descubre su destino en el mundo mágico."
    },
    {
        id: 6,
        titulo: "Los juegos del hambre",
        autor: "Suzanne Collins",
        img: "/public/img/losjuegosdelhambre.png",
        descripcion: "Una competencia mortal en un mundo distópico donde los jóvenes luchan por sobrevivir."
    }
];