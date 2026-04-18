const boton = document.getElementById('agregar');
const texto = document.getElementById('producto');
const mostrar = document.getElementById('resultado');
const contadorTexto = document.getElementById('contador');

let cantProductos = 0;

//Actualizar el contador
const valorContador = () => {
    contadorTexto.textContent = `Total de productos en la lista: ${cantProductos}`;
};

boton.addEventListener ('click', (e) => {
    if (texto.value.trim() !== '') {

    // Crear elementos
    const nuevoli = document.createElement ('li');
    nuevoli.innerHTML = `${texto.value} <button class="botonEliminar">Eliminar</button>`;
    mostrar.appendChild (nuevoli);
    cantProductos++;
    valorContador();

    //Eliminar elementos
    const eliminar = nuevoli.querySelector('.botonEliminar');
    eliminar.onclick = () => {
        nuevoli.remove();
        cantProductos--;
        valorContador();
    };
          
    } else {
        alert("Ingrese un producto por favor.");
    }
});