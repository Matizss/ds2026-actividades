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
function renderizar(libros) {
    //agrega cada libro como <li> en el <ul> y actualiza el <p>
    //de stats con la cantidad y el promedio.
    const listado = document.getElementById("listado");
    const stats = document.getElementById("stats");
    listado.innerHTML = "";
    libros.forEach(libro => {
        const nuevoli = document.createElement("li");
        const estado = libro.disponible ? "✅ Disponible" : "❌ No disponible";
        nuevoli.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${estado} - ${libro.genero || "sin género"}`;
        listado.appendChild(nuevoli);
    });
    stats.textContent = `Cantidad de libros: ${libros.length}, precio promedio: $${precioPromedio(libros)}`;
}
;
function buscarPorAutor(autor) {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
;
function librosDisponibles() {
    return catalogo.filter(libro => libro.disponible);
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
