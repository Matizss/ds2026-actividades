const boton = document.getElementById('generar') as HTMLButtonElement;
const numero = document.getElementById('altura') as HTMLInputElement;
const mostrar = document.getElementById('resultado') as HTMLDivElement;

//Funcion para generar asteriscos usada en el ejercicio anterior
const generarAsteriscos = (n: number): string => {
     let asteriscos = "";
     for (let i = 0; i < n; i++) {
         asteriscos += "*";
     }
     return asteriscos;
};

//typescript dice que no puede aplicar >= en numero.value pq puede ser un string
//asi que convertimos numero.value en un number


boton.addEventListener ('click', (e) => {
    const valor: number = Number(numero.value);

    if (valor >= 1) {
        mostrar.innerHTML = "" //Para borrar lo que teniamos antes, por si tocamos varias veces

        for(let i = 0; i < valor; i++){
            // Crear elementos
            const nuevoNav = document.createElement ('nav');
            nuevoNav.innerHTML = `${generarAsteriscos(i+1)}`;
            mostrar.appendChild (nuevoNav);
        }
          
    } else {
         mostrar.textContent = ("Error, ingrese un numero mayor a 1."); 
    }    
});