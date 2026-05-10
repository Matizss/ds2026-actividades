const params = new URLSearchParams(window.location.search)
const id = params.get("id")

if (id) {
    fetch(`https://openlibrary.org${id}.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const titulo = document.getElementById("titulo")!
            const descripcion = document.getElementById("descripcion")!
            const imagen = document.getElementById("imagen") as HTMLImageElement

            titulo.textContent = data.title

            descripcion.textContent = data.description
                ? (typeof data.description === "string"
                    ? data.description
                    : data.description.value)
                : "Sin descripción"

            // imagen (puede no existir)
            if (data.covers) {
                imagen.src = `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
            }
        })
}