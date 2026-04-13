// Ejercicio 3 — Funciones con lógica
// ● Crear función calcularPrecioFinal(monto, medioPago) donde
// medioPago es "E" (efectivo), "D" (débito) o "C" (crédito):
// ○ Monto menor a $200: sin descuento
// ○ Entre $200 y $400: 30% off en efectivo, 20% débito, 10%
// crédito
// ○ Mayor a $400: 40% off para todos
// ○ Retornar el monto final
// ● Probar con al menos 5 combinaciones diferentes de monto y
// medio de pago. Mostrar cada resultado en consola con template
// literals: "Monto: $X | Pago: Y | Final: $Z"


const calcularPrecioFinal = (monto, medioPago) => {
    if (monto < 200) {
        return monto; //Compras menores a $200 sin descuento
    }
    
    if (monto >=200 && monto <=400) {
         if (medioPago === "E") return monto * 0.7;
         if (medioPago === "D") return monto * 0.8;
         if (medioPago === "C") return monto * 0.9;
    };

    if (monto > 400) {
        return monto * 0.6; //40% OFF a las compras mayores a $400
    }
};


const test1 = 150; const pago1 = "E";
console.log(`Monto: $${test1} | Pago: ${pago1} | Final: $${calcularPrecioFinal(test1, pago1)}`);

const test2 = 150; const pago2 = "D";
console.log(`Monto: $${test2} | Pago: ${pago2} | Final: $${calcularPrecioFinal(test2, pago2)}`);

const test3 = 300; const pago3 = "E";
console.log(`Monto: $${test3} | Pago: ${pago3} | Final: $${calcularPrecioFinal(test3, pago3)}`);

const test4 = 300; const pago4 = "D";
console.log(`Monto: $${test4} | Pago: ${pago4} | Final: $${calcularPrecioFinal(test4, pago4)}`);

const test5 = 300; const pago5 = "C";
console.log(`Monto: $${test5} | Pago: ${pago5} | Final: $${calcularPrecioFinal(test5, pago5)}`);

const test6 = 500; const pago6 = "E";
console.log(`Monto: $${test6} | Pago: ${pago6} | Final: $${calcularPrecioFinal(test6, pago6)}`);

const test7 = 500; const pago7 = "C";
console.log(`Monto: $${test7} | Pago: ${pago7} | Final: $${calcularPrecioFinal(test7, pago7)}`);