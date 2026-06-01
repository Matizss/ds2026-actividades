import LibroCard from '../components/LibroCard'

type Libro = {
  titulo: string;
  autor: string;
  img: string;
};

const librosIniciales: Libro[] = [
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    img: "img/principito.png",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    img: "img/1984.png",
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    img: "img/donquijote.png",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    img: "img/451.png",
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    img: "img/piedrafilosofal.png",
  },
  {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    img: "img/losjuegosdelhambre.png",
  },
];

function Destacados() {
  return (
    <div className="container my-4">
      <h2 className="text-center my-4">Libros destacados</h2>

      <div className="row g-4">
        {librosIniciales.map((libro, index) => (
          <div className="col-md-4 text-center" key={index}>
            <LibroCard libro={libro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados