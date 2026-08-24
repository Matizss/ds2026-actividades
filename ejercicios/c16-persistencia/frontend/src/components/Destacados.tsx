import LibroCard from '../components/LibroCard'
import { libros } from "../data/libros";

function Destacados() {
  return (
    <div className="container my-4">
      <h2 className="text-center my-4">Libros destacados</h2>

      <div className="row g-4">
        {libros.map((libro, index) => (
          <div className="col-md-4 text-center" key={index}>
            <LibroCard libro={libro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados