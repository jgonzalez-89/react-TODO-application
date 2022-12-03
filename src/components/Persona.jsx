import React from 'react'

const Persona = () => {
  return (
      
          <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
              <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
                  <span className='font-normal normal-case'>Hook</span>
              </p>

              <p className='font-bold mb-3 text-gray-700 uppercase'>Pais: {""}
                  <span className='font-normal normal-case'>Hook</span>
              </p>

              <p className='font-bold mb-3 text-gray-700 uppercase'>email: {""}
                  <span className='font-normal normal-case'>correo@correo.es</span>
              </p>

              <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Nacimiento: {""}
                  <span className='font-normal normal-case'>31 enero 1989</span>
              </p>

              <p className='font-bold mb-3 text-gray-700 uppercase'>Comentarios: {""}
                  <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nemo ducimus omnis cupiditate sequi assumenda temporibus, culpa totam at quidem velit repellendus commodi laudantium odit facilis libero pariatur nostrum non.</span>
              </p>
          </div>
      
  )
}

export default Persona