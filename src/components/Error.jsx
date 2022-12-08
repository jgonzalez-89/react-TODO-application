import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-600 text-center uppercase text-white texte-bold p-3 rounded-md mb-3">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error