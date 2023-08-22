import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg';
import Equipo from './components/equipo';
import Footer from './components/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
      id: uuid(),
      equipo:"Front End",
      foto: "https://github.com/Samuelgon23.png",
      nombre:"Samuel González",
      puesto: "Estudiante",
      fav: true
  },
  {
    id: uuid(),
    equipo:"Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav: true
},
  {
      id: uuid(),
      equipo:"Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre:"Genesys Rondón",
      puesto: "Desarrolladora de Software e Instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo:"Data Science",
      foto: "https://github.com/christianpva.png",
      nombre:"Christian Velasco",
      puesto: "Head de Alura Latam",
      fav: false
  },
    {
      id: uuid(),
      equipo:"Ux y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jean Marie Quijada",
      puesto: "Instructura en Alura Latam",
      fav: false
  },
  {
    id: uuid(),
    equipo:"Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Jose Gonzalez",
    puesto: "Dev Fullstack",
    fav: false
  }])

  const [Equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:"Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "Ux y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      },
    ])

  //  Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
      console.log("Nuevo Colaborador: ", colaborador)
      //Spread Operator
      actualizarColaboradores([...colaboradores, colaborador]) //cuando vea un arreglo con 3 puntitos quiere decir que es una copia, está copiando algo, en este caso el valor que ya está grabado arriba en la const
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de Equipo
  const actualizarColor = (color, id) =>{ //en id iba titulo, fue reemplazado con el fin de que si en algun momento hay 2 equipos con el mismo nombre, no se vaya a ver afectado mi codigo
    console.log("actualizar : ", color, id)
    const equiposActualizados = Equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
    })

    actualizarEquipos(equiposActualizados)
  } 

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo)
      actualizarEquipos([...Equipos, {...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like ", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav 
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <div></div>} */}

      {mostrarFormulario && <Formulario
       equipos={Equipos.map((equipo) => equipo.titulo)} 
       registrarColaborador={registrarColaborador}
       crearEquipo={crearEquipo}
       />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
     
      {
        Equipos.map((equipo) =>  //una propiedad que ponemos en esta funcion dentro del .map es que en la primera posicion que serian nuestros parametros () vamos a recibir los datos del equipo, podria ser cualquier nombre, en este caso puse equipo. Pero la idea es que alli en ese equipo va a ser la representacion de cada uno de los elementos de arriba ( los equipos)         
          <Equipo Datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
