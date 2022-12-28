import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoTareas from "./components/ListadoTareas";
import { HttpHandler } from "./http/handler";

export function loader() {
  console.log(import.meta.env);
}

function App() {
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(0);
  const handler = new HttpHandler();

  useEffect(() => {
    const caller = async () => {
      let response = await handler.get();
      setTodos(response);
    };
    caller();
  }, [updated]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Formulario setUpdated={setUpdated} />

        <ListadoTareas tareas={todos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
