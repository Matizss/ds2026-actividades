// Ejercicio 2 — Condicionales
// ● Crear una función clasificarNota(nota) que reciba un número y
// retorne:
// ○ "Desaprobado" si es menor a 4
// ○ "Aprobado" si es entre 4 y 7
// ○ "Promocionado" si es 8 o más
// ● Crear una función diaDeLaSemana(numero) con switch que retorne
// el nombre del día (1=Lunes...7=Domingo). Si es 6 o 7 agregar
// "(fin de semana)". Si no es 1-7, retornar "Día inválido".
// ● Probar ambas funciones con console.log usando distintos
// valores.


const clasificarNota = (nota) => {
    if (nota < 4) return console.log("Desaprobado");
    if (nota >= 4 && nota <8) return console.log("Aprobado");
    if (nota >= 8) return console.log("Promocionado");
}


const diaDeLaSemana = (numero) => {
    switch (numero) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;

        default: console.log("Ingrese un número entre el 1 y el 7." );
    }
}
