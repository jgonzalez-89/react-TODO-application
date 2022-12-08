import React from 'react'
import Tarea from './Tarea'


const ListadoTareas = () => {
    return (
        <div className="mx-3 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className='font-black text-3xl text-center'>Listado Tareas</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Administra tus {""}
                <span className="text-indigo-600 font-bold">Tareas</span>
            </p>

            <Tarea />

        </div>
    )
}

export default ListadoTareas