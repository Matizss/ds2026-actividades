import '../App.css';
import LibroCard from '../components/LibroCard';
import { Link } from 'react-router-dom';
import type { Libro } from '../types/libro';

import { Spinner, Alert } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react';



function Catalogo() {
  const { data: libros, loading, error } = useFetch<(Libro & { id: number; descripcion: string })[]>('/libros.json');

  useEffect(() => {
    document.title = "Catálogo Librería";

    
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
  
  if (error) {
    const mensaje = error.includes('JSON') || error.includes('syntax')
      ? 'Hubo un problema al procesar la información del catálogo. Por favor, intenta de nuevo más tarde.'
      : error;

    return (
      <div className="container my-4">
        <Alert variant="danger">
          <Alert.Heading>Algo salió mal</Alert.Heading>
          <p>{mensaje}</p>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="mb-0">Catálogo</h2>
        <Link to="/libros/nuevo" className="btn btn-success">
          + Agregar libro
        </Link>
      </div>

      <div className="row g-4">
        {(libros ?? []).map((libro) => (
          <div className="col-md-4" key={libro.id}>
            <LibroCard libro={libro} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;