
const numeros = [19, 3, 7, 5, 11, 13, 17, 2];


const calcularSuma = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = numeros[i] + suma;
    }
    return suma;
};
console.log(calcularSuma (numeros));


const calcularPromedio = (numeros) => {
    return (calcularSuma(numeros) / numeros.length);
};
console.log(calcularPromedio (numeros));


const mayor = (numeros) => {
    let x = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (x < numeros[i]){
            x = numeros[i];
        }
    }
    return x;
};
console.log(mayor(numeros));


const menor = (numeros) => {
    let x = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (x > numeros[i]){
            x = numeros[i];
        }
    }
    return x;
};
console.log(menor(numeros));


const generarAsteriscos = (n) => {
    let asteriscos = "";
    for (let i = 0; i < n; i++) {
            asteriscos += "*";
        }

    console.log(asteriscos);
}