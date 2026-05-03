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
        return usuarios;
    }
    catch (error) {
        console.error('Error al obtener los usuarios: ', error)
        return[];
    }
}

const main = async (): Promise<void> =>{ 
    const usuarios: Usuario[] = await obtenerUsuarios()

    usuarios.forEach(usuario => {
        console.log(`Usuario numero: ${usuario.id}, Nombre Usuario: ${usuario.name}, Correo: ${usuario.email}`)
    })
}

main()