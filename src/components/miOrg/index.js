import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    //Estado - Hooks
    //useState
    //useState()
    //así se usa:
    // const [nombreVariable, functionActualiza] = useState(valorInicial)
    console.log(props)

   const [mostrar, actualizarMostrar] = useState(true)

    const ManejarClick = () => {
        console.log("mostrar/ocultar elemento ")
        actualizarMostrar("hola")
    }
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/Add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg