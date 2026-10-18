import LibroCard from '../components/LibroCard';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';
import { Spinner } from 'react-bootstrap';

function Destacados() {
  const { data: libros, loading } = useFetch<Libro[]>('/libros');

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-4">
        <Spinner animation="border" />
      </div>
    );
  }

  const destacados = (libros ?? []).slice(0, 3);

  return (
    <div className="container my-4">
      <h2 className="text-center my-4">Libros destacados</h2>
      <div className="row g-4">
        {destacados.map((libro) => (
          <div className="col-md-4 text-center" key={libro.id}>
            <LibroCard libro={libro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados;