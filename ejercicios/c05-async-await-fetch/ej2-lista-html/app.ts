interface Usuario{
    id: number,
    name: string,
    email: string,
    phone: string, 
}   

const obtenerUsuarios = async (): Promise<Usuario[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok){
            throw new Error(`ERROR`)
        }
        const usuarios: Usuario[] = await response.json()
        return usuarios
    }
    catch (error) {
        console.error('Error al obtener los usuarios: ', error)
    throw error
    }
}

const main = async (): Promise<void> => {
    const cargando = document.getElementById("cargando") as HTMLParagraphElement
    const errorMsg = document.getElementById("error") as HTMLParagraphElement

    cargando.classList.remove("oculto")
    errorMsg.textContent = ""
    errorMsg.classList.add("oculto")

    try {
        const usuarios: Usuario[] = await obtenerUsuarios()
        renderizar(usuarios)
    } catch {
        errorMsg.textContent = "Error al cargar los usuarios"
        errorMsg.classList.remove("oculto")
    } finally {
        cargando.classList.add("oculto")
    }
}

const renderizar = (usuarios: Usuario[]): void => {
    const listado = document.getElementById("listado") as HTMLUListElement;
    listado.innerHTML = ""

    usuarios.forEach( usuario => {
        const nuevoli = document.createElement("li");
        nuevoli.innerHTML = `Nombre Usuario: ${usuario.name}, Correo: ${usuario.email}`
        listado.appendChild(nuevoli);
    })
}

document.getElementById("cargar")?.addEventListener("click", main)