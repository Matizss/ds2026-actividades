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
        throw error;
    }
};
const main = async () => {
    const cargando = document.getElementById("cargando");
    const errorMsg = document.getElementById("error");
    cargando.classList.remove("oculto");
    errorMsg.textContent = "";
    errorMsg.classList.add("oculto");
    try {
        const usuarios = await obtenerUsuarios();
        renderizar(usuarios);
    }
    catch {
        errorMsg.textContent = "Error al cargar los usuarios";
        errorMsg.classList.remove("oculto");
    }
    finally {
        cargando.classList.add("oculto");
    }
};
const renderizar = (usuarios) => {
    const listado = document.getElementById("listado");
    listado.innerHTML = "";
    usuarios.forEach(usuario => {
        const nuevoli = document.createElement("li");
        nuevoli.innerHTML = `Nombre Usuario: ${usuario.name}, Correo: ${usuario.email}`;
        listado.appendChild(nuevoli);
    });
};
document.getElementById("cargar")?.addEventListener("click", main);
