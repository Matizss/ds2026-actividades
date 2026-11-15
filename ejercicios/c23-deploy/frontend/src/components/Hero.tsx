import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-primary text-white text-center py-5 fondo">
      <div className="container bg-dark p-5 rounded">
        <h1>Bienvenido a Mi librería</h1>
        <h4>Descubrí los mejores libros de todos los géneros</h4>
        <Link to="/catalogo" className="btn btn-light btn-lg">Catálogo</Link>
      </div>
    </section>
  );
}

export default Hero