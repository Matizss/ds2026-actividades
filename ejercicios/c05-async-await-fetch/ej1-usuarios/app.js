"use strict";
const obtenerUsuarios = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`ERROR`);
        }
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        console.error('Error al obtener los usuarios: ', error);
        return [];
    }
};
const main = async () => {
    const usuarios = await obtenerUsuarios();
    usuarios.forEach(usuario => {
        console.log(`Usuario numero: ${usuario.id}, Nombre Usuario: ${usuario.name}, Correo: ${usuario.email}`);
    });
};
main();
