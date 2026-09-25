import { useParams, Link } from 'react-router-dom';
import '../App.css';
import type { Libro } from '../types/libro';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';

function LibroDetalle() {
  const { id } = useParams();
  const { data: libro, loading, error } = useFetch<Libro>(`/libros/${id}`);

  useEffect(() => {
    document.title = "Detalle libro";
    return () => {
      document.title = "Libreria - Inicio";
    };
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error || !libro) {
    return (
      <div className="container py-5 text-center">
        <h2>Libro no encontrado</h2>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        <Link to="/catalogo" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row align-items-center shadow py-4">
        <div className="col-12 col-md-5 text-center">
          <img src={libro.img} className="img-portada" alt={libro.titulo} />
        </div>

        <div className="col-12 col-md-7">
          <h1 className="pt-3">{libro.titulo}</h1>
          <h4 className="text-muted">{libro.autor.nombre}</h4>

          <p>{libro.descripcion}</p>

          <h3 className="text-primary mt-4">${libro.precio}</h3>

          <span className={`badge ${libro.disponible ? 'bg-success' : 'bg-secondary'} mb-3`}>
            {libro.disponible ? 'Disponible' : 'No disponible'}
          </span>

          <div className="mt-4">
            <button className="btn btn-success me-2">Comprar</button>
            <Link to="/catalogo" className="btn btn-outline-secondary">Volver al catálogo</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;