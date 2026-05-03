interface LibroOL{
    title: string,
    author_name?: string[],
    first_publish_year?: number, 
} 

const input = document.getElementById("input") as HTMLInputElement
const errorMsg = document.getElementById("error") as HTMLParagraphElement
const resultados = document.getElementById("resultados") as HTMLDivElement
const cargando = document.getElementById("cargando") as HTMLParagraphElement

const obtenerLibro = async (query: string): Promise<LibroOL[]> => {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
        if (!response.ok){
            throw new Error(`ERROR`)
        }
        const data = await response.json()
        return data.docs
    }
    catch (error) {
        console.error('Error al obtener los libros: ', error)
        throw error
    }
}

const main = async (): Promise<void> => { 
    errorMsg.classList.add("oculto")
    const query = input.value.trim()

    const error = validarQuery(query)
    if (error) {
        mostrarError(error)
        return
    }

    ocultarError()
    cargando.classList.remove("oculto")

    try {
        const libros = await obtenerLibro(query)

        if (libros.length === 0) {
            errorMsg.textContent = "No se encontraron resultados con esta busqueda."
            errorMsg.classList.remove("oculto")
            return
        }
        renderizar(libros.slice(0, 10))
    } catch {
        mostrarError("Error al buscar el libro")
    } finally {
        cargando.classList.add("oculto")
    }
}

const validarQuery = (query: string): string | null => {
    if (query === "") return "Ingrese el nombre de un libro"
    if (query.length <= 3) return "Ingrese mas de 3 caracteres"
    return null
}

const mostrarError = (msg: string) => {
    errorMsg.textContent = msg
    errorMsg.classList.remove("oculto")
}

const ocultarError = () => {
    errorMsg.textContent = ""
    errorMsg.classList.add("oculto")
}

const renderizar = (libros: LibroOL[]): void => {
    resultados.innerHTML = ""

    libros.forEach( libro => {
        const nuevodiv = document.createElement("div")
        nuevodiv.classList.add("nuevodiv")

        const autor = libro.author_name ? libro.author_name[0] : "Desconocido"
        const año = libro.first_publish_year ?? "N/A"

        nuevodiv.innerHTML = `
            <h3>${libro.title}</h3>
            <p>Autor: ${autor}</p>
            <p>Año: ${año}</p>
        `

        resultados.appendChild(nuevodiv)
    })
}

document.getElementById("buscar")?.addEventListener("click", main)