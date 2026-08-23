import { useState } from "react";
import { Link } from "react-router-dom";
import type { Libro } from "../types/libro";

import { Spinner, Alert } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch'
import { useEffect } from "react";

function LibroCard({ libro }: { libro: Libro }) {
  const [like, setLike] = useState(false);
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros.json');

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
    <div className="card h-100">
      <img src={libro.img} className="card-img-top" alt={libro.titulo} />

      <div className="card-body">
        <h5 className="card-title">{libro.titulo}</h5>
        <p className="card-text">{libro.autor}</p>
        <Link to={`/libros/${libro.id}`} className="btn btn-primary w-100 mb-2"> Ver más</Link>
        <button
          className={`btn w-100 ${
            like ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setLike(!like)}
        >
          {like ? "🤍 Te gusta" : "❤️ Me gusta"}
        </button>
      </div>
    </div>
  );
}

export default LibroCard