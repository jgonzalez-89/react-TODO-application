import { useEffect, useState } from "react"

import Footer from "./components/Footer";
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas";


function App() {

  const [tareas, setTareas] = useState([]);
  const [tareaObj, setTarea] = useState({});

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)

  }

  const [posts, setPosts] = useState();

  const FetchApiPosts = () => {
     fetch('http://assets.breatheco.de/apis/fake/todos/user/jgonzalez89', {
        method: "GET",
        // body: JSON.stringify(todos),
        // headers: {
        //   "Content-Type": "application/json"
        // }
      })
      .then(resp => {
          // console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
          // console.log(resp.status); // el código de estado = 200 o código = 400 etc.
          // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
          return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
          //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
          // setPosts(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
          setPosts(data);
          
      })
      .catch(error => {
          //manejo de errores
          console.log(error);
      });
    }

    const PutApiPosts = (nuevoPost) => {
      fetch('http://assets.breatheco.de/apis/fake/todos/user/jgonzalez89', {
         method: "PUT",
         body: JSON.stringify(nuevoPost),
         headers: {
           "Content-Type": "application/json"
         }
       })
       .then(resp => {
           // console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
           // console.log(resp.status); // el código de estado = 200 o código = 400 etc.
           // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
           return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
       })
       .then(data => {
           //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
           // setPosts(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
           setPosts(data);
           
       })
       .catch(error => {
           //manejo de errores
           console.log(error);
       });
     }

    useEffect(()=>{
      FetchApiPosts()
    }, [])


    function AgregarTarea() {
      const tareaNueva = {label : "hola", done : true}

      const nuevoPost=[...posts, tareaNueva]
 
      PutApiPosts(nuevoPost)
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
      tareas={posts}
      setTarea={setTarea}
      eliminarTarea={eliminarTarea}
      />
      
      </div>
      <button onClick={AgregarTarea}>Click Aqui!</button>
      {/* <FetchApiPosts /> */}
      
      <Footer />
    </div>

  )
}

export default App
  