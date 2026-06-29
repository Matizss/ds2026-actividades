import '../App.css';
import LibroCard from '../components/LibroCard';
import { Link } from 'react-router-dom';
import type { Libro } from '../types/libro';

interface Props {
  libros: Libro[];
}

function Catalogo({ libros }: Props) {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="mb-0">Catálogo</h2>
        <Link to="/libros/nuevo" className="btn btn-success">
          + Agregar libro
        </Link>
      </div>

      <div className="row g-4">
        {libros.map((libro) => (
          <div className="col-md-4 text-center" key={libro.id}>
            <LibroCard libro={libro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;