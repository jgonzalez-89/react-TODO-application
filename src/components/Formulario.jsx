import React from 'react'
import { useState, useEffect } from 'react'


const Formulario = () => {
	const [persona, setPersona] = useState("");


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Personas</h2>

      <p className='text-lg mt-5 text-center mb-10'>Añade Personas y {""}
        <span className="text-indigo-600 font-bold">Administralas</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre</label>

          <input
            id='nombre'
            type="text"
            placeholder="Introduce el Nombre de la Persona"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
			value={persona}
			onChange={(e)=> setPersona(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='apellidos' className='block text-gray-700 uppercase font-bold'>Apellidos</label>

          <input
            id='apellidos'
            type="text"
            placeholder="Introduce tus apellidos"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>

          <input
            id='email'
            type="email"
            placeholder="Introduce un correo valido"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>Fecha de Nacimiento</label>

          <input
            id='fecha'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='comentarios' className='block text-gray-700 uppercase font-bold'>Comentarios</label>
          <textarea 
            id='comentarios'
            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
            placeholder='Escribe un comentario'
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