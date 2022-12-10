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


  //   function AgregarTarea() {
  //     const tareaNueva = {label : "hola", done : true,}

  //     const nuevoPost=[...posts, tareaNueva]
 
  //     PutApiPosts(nuevoPost)
  //   }
  
    

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
      {/* <button onClick={AgregarTarea}>Click Aqui!</button> */}
      
      <Footer />
    </div>

  )
}

export default App
  