import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoTareas from "./components/ListadoTareas";

export function loader() {
  console.log(import.meta.env);
}

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaObj, setTarea] = useState({});

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // funcion onSubmit del form
  const addTask = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return;
    } else {
      // creo una array vacio, recorro list, y genero un array de objetos
      var todosPUT = [];
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        let item = {};
        item["label"] = element;
        item["done"] = false;
        todosPUT.push(item);
      }

      // agrego la nueva tarea 'inputValue' en formato objeto
      todosPUT.push({ label: inputValue, done: false });
    }
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
          tareas={data} //Agregar "data" para ejecutar la Api
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
