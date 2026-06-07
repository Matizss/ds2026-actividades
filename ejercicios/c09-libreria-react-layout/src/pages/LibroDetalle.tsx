import { useParams } from 'react-router-dom' ;
import { Link } from 'react-router-dom';
import '../App.css'
import { libros } from "../data/libros";


function LibroDetalle () {
    const { id } = useParams <{ id: string }>();
        // ↑ matchea con :id de /libros/:id
    const libro = libros.find(l => l.id === Number(id));
    if (!libro) return <p>Libro no encontrado</p>;

    return(
        <div className="container mt-4">
            <div className="row align-items-center shadow py-4">

                <div className="col-12 col-md-5 text-center">
                <img
                    src={libro.img}
                    className="img-portada"
                    alt={libro.titulo}
                />
                </div>

                <div className="col-12 col-md-7">
                <h1 className="pt-3">{libro.titulo}</h1>
                <h4 className="text-muted">{libro.autor}</h4>

                <p>{libro.descripcion}</p>

                <h3 className="text-primary mt-4">$25.000</h3>

                <div className="mt-4">
                    <button className="btn btn-success me-2">
                    Comprar
                    </button>

                    <Link
                    to="/catalogo"
                    className="btn btn-outline-secondary"
                    >
                    Volver al catálogo
                    </Link>
                </div>
                </div>

            </div>
        </div>
    );
}

export default LibroDetalle