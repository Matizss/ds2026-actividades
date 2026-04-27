"use strict";
const catalogo = [
    { isbn: "1", titulo: "Libro A", autor: "Borges", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Cortazar", precio: 1300, disponible: false },
    { isbn: "3", titulo: "Libro C", autor: "Borges", precio: 2000, disponible: true, genero: "Test" }
];
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((acc, libro) => acc + libro.precio, 0);
    return total / libros.length;
}
;
function librosDisponibles() {
    return catalogo.filter(libro => libro.disponible);
}
;
function eliminarLibro(isbn) {
    const index = catalogo.findIndex(libro => libro.isbn === isbn);
    catalogo.splice(index, 1);
    renderizar(catalogo);
}
;
function renderizar(libros) {
    //agrega cada libro como <li> en el <ul> y actualiza el <p>
    //de stats con la cantidad y el promedio.
    const listado = document.getElementById("listado");
    const stats = document.getElementById("stats");
    listado.innerHTML = "";
    libros.forEach(libro => {
        const nuevoli = document.createElement("li");
        const estado = libro.disponible ? "✅ Disponible" : "❌ No disponible";
        nuevoli.innerHTML = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${estado} - ${libro.genero || "sin género"}`;
        const boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.addEventListener('click', (e) => {
            eliminarLibro(libro.isbn);
        });
        nuevoli.appendChild(boton);
        listado.appendChild(nuevoli);
    });
    stats.textContent = `Cantidad de libros: ${libros.length}, precio promedio: $${precioPromedio(libros)}`;
}
;
function buscarPorAutor(autor) {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
;
function validarFormulario() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const precioInput = document.getElementById("precio").value;
    const disponible = document.getElementById("disponible").checked;
    const genero = document.getElementById("genero").value;
    const precio = Number(precioInput);
    const errorDiv = document.getElementById("errorForm");
    if (titulo.trim() === "" || autor.trim() === "" || precio <= 0) {
        return null;
    }
    errorDiv.textContent = ""; // limpia error si esta todo bien
    return {
        isbn: "AUTO-" + Date.now(),
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: disponible,
        genero: genero || undefined
    };
}
;
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
;
document.getElementById("mostrarTodos")?.addEventListener("click", () => {
    renderizar(catalogo);
});
document.getElementById("filtrar")?.addEventListener("click", () => {
    //agarramos el nombre del autor
    const input = document.getElementById("filtroAutor");
    renderizar(buscarPorAutor(input.value));
});
document.getElementById("mostrarDisponibles")?.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
document.getElementById("agregar")?.addEventListener("click", (e) => {
    e.preventDefault();
    const errorDiv = document.getElementById("errorForm");
    const libro = validarFormulario();
    if (libro === null) {
        errorDiv.textContent = "Datos inválidos: título, autor es obligatorio y el precio > 0";
        return;
    }
    agregarLibro(libro);
    //para limpiar el form
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("genero").value = "";
});
renderizar(catalogo);
