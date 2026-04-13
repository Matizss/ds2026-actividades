const nombre = 'Matias';
const edad = '21';
const materia = 'Desarrollo de Software';

let contador = 0;

const mensaje = `Me llamo ${nombre}, tengo ${edad} años y curso ${materia}`; 

console.log(mensaje);

console.log(`El contador inicio en ${contador}`);

for (let i = 0; i < 3; i++){
    contador += 1;
}

console.log(`El contador finalizo en ${contador}`);
