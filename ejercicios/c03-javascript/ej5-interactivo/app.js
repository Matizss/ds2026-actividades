const boton = document.getElementById('generar');
const numero = document.getElementById('altura');
const mostrar = document.getElementById('resultado');

//Funcion para generar asteriscos usada en el ejercicio anterior
const generarAsteriscos = (n) => {
    let asteriscos = "";
    for (let i = 0; i < n; i++) {
        asteriscos += "*";
    }
    return asteriscos;
    //console.log(asteriscos);
}

boton.addEventListener ('click', (e) => {
    if (numero.value >= 1) {
        mostrar.innerHTML = "" //Para borrar lo que teniamos antes, por si tocamos varias veces

        for(let i = 0; i < numero.value; i++){
            // Crear elementos
            const nuevoNav = document.createElement ('nav');
            nuevoNav.innerHTML = `${generarAsteriscos(i+1)}`;
            mostrar.appendChild (nuevoNav);
        }
          
    } else {
        mostrar.textContent = ("Error, ingrese un numero mayor a 0."); 
    }    
});