import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoTareas from "./components/ListadoTareas";

function App() {

  const [tareas, setTareas] = useState([]);
  const [tareaObj, setTarea] = useState({});

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  // Actualizando --------------------------------------------------------------!
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  // API urls
  let host = 'https://assets.breatheco.de/apis/fake/todos/user/';
  let user = 'jgonzalez89';

  // fetch GET todos - consulta los todos desde la API
  const GetTodos = async () => {
    const url = host + user;
    const request = {
      method: 'GET',
      redirect: 'follow'
    };
    const response = await fetch(url, request);
    const responseJSON = await response.json();
    responseJSON.map((item) => { setList((e) => [...e, item.label]); })
  };


  // fetch PUT todos - agrega un todo a la lista en la API
  const PutTodos = async (todos) => {
    const url = host + user;
    const request = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todos),
    };
    const response = await fetch(url, request);
    const responseJSON = await response.json();
    if (responseJSON.ok) {
      console.log("todo ok");
    } else {
      console.log('error', error);
    }
  }

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
        item['label'] = element;
        item['done'] = false;
        todosPUT.push(item);
      };
      // agrego la nueva tarea 'inputValue' en formato objeto
      todosPUT.push({ 'label': inputValue, 'done': false });
      // agrego el tecth para actualizar la API
      fetchPutTodos(todosPUT);
      setList([...list, inputValue]);
      setInputValue("");
    }
  }

  // const [posts, setPosts] = useState();

  // const FetchApiPosts = () => {
  //    fetch('http://assets.breatheco.de/apis/fake/todos/user/jgonzalez89', {
  //       method: "GET",
  //     })
  //     .then(resp => {
  //         return resp.json();
  //     })
  //     .then(data => {
  //         setPosts(data);
  //     })
  //     .catch(error => {
  //         //manejo de errores
  //         console.log(error);
  //     });
  //   }

  //   const PutApiPosts = (nuevoPost) => {
  //     fetch('http://assets.breatheco.de/apis/fake/todos/user/jgonzalez89', {
  //        method: "PUT",
  //        body: JSON.stringify(nuevoPost),
  //        headers: {
  //          "Content-Type": "application/json"
  //        }
  //      })
  //      .then(resp => {

  //          return resp.json();
  //      })
  //      .then(data => {

  //          setPosts(data);

  //      })
  //      .catch(error => {
  //          //Logs de errores
  //          console.log(error);
  //      });
  //    }

  //   useEffect(()=>{
  //     FetchApiPosts()
  //   }, [])

  // function AgregarTarea() {
  //   const tareaNueva = {label : "hola", done : true,}

  //   const nuevoPost=[...posts, tareaNueva]

  //   PutApiPosts(nuevoPost)
  // }

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
