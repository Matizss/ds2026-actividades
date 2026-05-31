import { useState } from "react";

type Libro = {
  titulo: string;
  autor: string;
  img: string;
};

function LibroCard({ libro }: { libro: Libro }) {
  const [like, setLike] = useState(false);

  return (
    <div className="card h-100">
      <img src={libro.img} className="card-img-top" alt={libro.titulo} />

      <div className="card-body">
        <h5 className="card-title">{libro.titulo}</h5>
        <p className="card-text">{libro.autor}</p>
        <a href="catalogo.html" className="btn btn-primary w-100 mb-2">
          Ver más
        </a>

        <button
          className={`btn w-100 ${
            like ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setLike(!like)}
        >
          {like ? "❤️ Te gusta" : "🤍 Me gusta"}
        </button>
      </div>
    </div>
  );
}

export default LibroCard 