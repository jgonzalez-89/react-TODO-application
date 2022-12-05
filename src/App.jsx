import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPersonas from "./components/ListadoPersonas"


function App() {

  const [persona, setPersona] = useState([]);

  return (
    <div className="container mx-auto mt-20">
    <Header />
      <div className="md:flex mt-12">
      <Formulario
        persona={persona}
        setPersona={setPersona}
      />
      <ListadoPersonas />
      </div>

    </div>
  )
}

export default App
  