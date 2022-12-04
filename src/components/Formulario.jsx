import React from 'react'
import { useState, useEffect } from 'react'


const Formulario = () => {
	const [persona, setPersona] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [comentario, setComentario] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de formulario
    if([persona, apellido, email, nacimiento, comentario].includes("")){
      console.log("Hay al menos un campo vacio")
    } else {
      console.log("Todos llenos")
    }
  }

	// modificando la variable a traves de una funcion
	// const miPo = (e) => {
	// 	setPersona(e.target.value)
	// }
	


  return (
    <div className="mx-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Personas</h2>

      <p className='text-lg mt-5 text-center mb-10'>Añade Personas y {""}
        <span className="text-indigo-600 font-bold">Administralas</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10">
        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre</label>

          <input
            id='nombre'
            type="text"
            placeholder="Introduce el Nombre de la Persona"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={persona}
            onChange={(e) => setPersona(e.target.value)} /* aqui pongo la funcion mipo */
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='apellidos' className='block text-gray-700 uppercase font-bold'>Apellidos</label>

          <input
            id='apellidos'
            type="text"
            placeholder="Introduce tus apellidos"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>

          <input
            id='email'
            type="email"
            placeholder="Introduce un correo valido"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>Fecha de Nacimiento</label>

          <input
            id='nacimiento'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            value={nacimiento}
            onChange={(e) => setNacimiento(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='comentarios' className='block text-gray-700 uppercase font-bold'>Comentarios</label>
          <textarea
            id='comentarios'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            placeholder='Escribe un comentario'
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 rounded-md cursor-pointer transition-all"
          value="Agregar persona"

        />
      </form>
    </div>
  )
}

export default Formulario