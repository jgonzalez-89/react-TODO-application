import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';


const Formulario = ({ tareas, setTareas, tareaObj, setTarea}) => {
  const [nombreTarea, setNombreTarea] = useState("");
	const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(false)

  const generarId=()=>{
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2);

    return fecha + random
  }

  useEffect(()=>{
    if(Object.keys(tareaObj).length > 0 ){
      setNombre(tareaObj.nombre);
      setNombreTarea(tareaObj.nombreTarea);
      setEmail(tareaObj.email);
      setFecha(tareaObj.fecha);
      setComentario(tareaObj.comentario);

    }
  }, [tareaObj])


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de formulario
    if([nombre, nombreTarea, email, fecha, comentario].includes("")){
      console.log("Hay al menos un campo vacio")
      setError(true);
      return;
    }
    setError(false);

    // Objeto de Tarea
    const objetoTareas = {
      nombre,
      nombreTarea,  
      email, 
      fecha, 
      comentario,

    }

    if(tareaObj.id) {
      // Editando el Registro de Tareas
      objetoTareas.id = tareaObj.id
      const tareasActualizadas = tareas.map( tareaObjState => tareaObjState.id === tareaObj.id ? objetoTareas : tareaObjState )

      setTareas(tareasActualizadas)
      setTarea({})

    }else {
      // Añadiendo Nueva Tarea al Registro
      objetoTareas.id = generarId();
      setTareas([...tareas, objetoTareas]);
    }


    // Reiniciar Formulario
    setNombre('')
    setNombreTarea('')
    setEmail('')
    setFecha('')
    setComentario('')
  }

  return (
    <div className="mx-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario de Tareas</h2>

      <p className='text-lg mt-5 text-center mb-10'>Añade Tareas y {""}
        <span className="text-sky-600 font-bold">Administralas</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10">
        {error && <Error mensaje='Todos los campos son obligatorios' />}
        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre Persona</label>

          <input
            id='nombre'
            type="text"
            placeholder="Introduce tu nombre"
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nueva Tarea</label>

          <input
            id='tarea'
            type="text"
            placeholder="Nombre de la tarea"
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={nombreTarea}
            onChange={(e) => setNombreTarea(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>

          <input
            id='email'
            type="email"
            placeholder="Introduce un correo valido"
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>Fecha de la Tarea</label>

          <input
            id='fecha'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='comentarios' className='block text-gray-700 uppercase font-bold'>Descripcion</label>
          <textarea
            id='comentarios'
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            placeholder='Describe brevemente la tarea'
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-800 rounded-md cursor-pointer transition-all"
          value={tareaObj.id ? 'Editar Tarea' : 'Agregar Tarea' }

        />
      </form>
    </div>
  )
}

export default Formulario