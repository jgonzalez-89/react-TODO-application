import React from 'react'

const Tareas = ({ tarea, setTarea }) => {

    const { nombre, nombreTarea, email, fecha, comentario } = tarea

    // console.log(tarea)
    return (

        <div className='m-3 bg-white shadow-xl px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre Persona: {""}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Tarea: {""}
                <span className='font-normal normal-case'>{nombreTarea}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>email: {""}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {""}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Comentarios: {""}
                <span className='font-normal normal-case'>{comentario}</span>
            </p>

            <div className='flex mt-10 justify-between mr-10 ml-10'>
                <button
                    type='button'
                    className='bg-sky-600 py-2 px-10 text-white uppercase font-bold hover:bg-sky-800 rounded-md cursor-pointer transition-all'
                    onClick={()=> setTarea(tarea)}

                >Editar</button>

                <button
                    type='button'
                    className='bg-red-600 py-2 px-10 text-white uppercase font-bold hover:bg-red-800 rounded-md cursor-pointer transition-all'

                >Eliminar</button>
            </div>
        </div>

  )
}

export default Tareas