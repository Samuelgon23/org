import "./listaOpciones.css"

const ListaOpciones = (props) =>{

    //Cuando trabajamos con arrays o arreglos se usa este metodo
    //Metodo map -> contiene nombre del arreglo arreglo.map( (equipo,index) => { //primero el elemento y segundo la posicion
    //   return <option></option>  
   // } )

    const manejarCambio = (e) => {
      console.log("Cambio", e.target.value)
      props.actualizarEquipo(e.target.value)
    }

    //con esta opcion hacemos que el seleccionar equipo se comporte como si fuese un placeholder, pero a su vez no se mostrará en la lista de opciones (está abajo en el <option>)

    //Una buena práctica que hay que tener respecto a los <option> es que así como nosotros pusimos en el ejemplo un value con string vacío, la realidad es que los <option> también pueden tener esa propiedad los 'value' y en este caso sería exactamente el mismo que el nombre del equipo. ESo Pusimos!

    return <div className="lista-opciones">
       <label>Equipos</label>
       <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos && props.equipos.map((equipo, index) => (
        <option key={index} value={equipo}>{equipo}</option>
      ))}
       </select>
    </div>
}

export default ListaOpciones 