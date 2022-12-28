export async function obtenerPosts() {
    const url = 'http://localhost:3000/posts'

    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

    console.log(resultado)

}