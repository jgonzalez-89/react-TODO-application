import React from 'react'
import Persona from './Persona'


const ListadoPersonas = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className='font-black text-3xl text-center'>Listado Personas</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Administra tus {""}
                <span className="text-indigo-600 font-bold">Personas</span>
            </p>

            <Persona />
            <Persona />
            <Persona />
            <Persona />
            <Persona />

        </div>
    )
}

export default ListadoPersonas