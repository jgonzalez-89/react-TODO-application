import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoTareas from "./components/ListadoTareas";

import { HttpHandler } from "./http/handler";
import { NewTodo } from "./models/todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(NewTodo());
  const [updated, setUpdated] = useState(0);
  const handler = new HttpHandler();

  useEffect(() => {
    const caller = async () => {
      let response = await handler.get();
      setTodos(response);
    };
    caller();
  }, [todo]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Formulario todo={todo} setTodo={setTodo} />

        <ListadoTareas tareas={todos} setTodo={setTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;


function App() {

  const [tareas, setTareas] = useState([]);
  const [tareaObj, setTarea] = useState({});

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  return (
    <div className="container mx-auto mt-20">

      <Header />
      <div className="md:flex mt-12">
        <Formulario
          tareas={tareas}
          setTareas={setTareas}
          tareaObj={tareaObj}
          setTarea={setTarea}
        />
        <ListadoTareas
          tareas={tareas} //Agregar "posts" para ejecutar la Api
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App

