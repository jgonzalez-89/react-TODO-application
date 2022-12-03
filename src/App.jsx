import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPersonas from "./components/ListadoPersonas"


function App() {

  return (
    <div className="container mx-auto mt-20">
    <Header />
      <div className="mt-12 flex">
      <Formulario />
      <ListadoPersonas />
      </div>

    </div>
  )
}

export default App
  