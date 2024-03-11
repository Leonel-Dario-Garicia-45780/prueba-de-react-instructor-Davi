
import { useState } from "react"
import TABlaclase from "./tabla"
import FILtroclase from "./filtro"

import "../en clase/formularioclase.css"

const FORmularioclase =()=>{
    const [id,setid]=useState("")
    const [nombre,setnombre]=useState("")
    const [decir,setdecir]=useState("")

    const [busqueda, setbusqueda] = useState("");

    const [datotabla,setdatotabla]= useState([])
    
    console.log(id)
    console.log(nombre)
    console.log(decir)
    
    const agregarDato = () => {
        const nuevoDato = {
          id: id,
          nombre: nombre,
          decir: decir
        };
        setdatotabla([...datotabla, nuevoDato]);
      };

    return(
        <div className="contenedor_total">

            <div className="imputs_caja">

                <div className="interaccion">
                <input type="text" placeholder="id"      onChange={(event)=>{setid(event.target.value)}}/>
                </div>


                <div className="interaccion">
                <input type="text" placeholder="nombre"  onChange={(event)=>{setnombre(event.target.value)}}/>
                </div>


                <div className="interaccion">
                <input type="text" placeholder="decir"   onChange={(event)=>{setdecir(event.target.value)}}/>
                </div>

                <button className="boton" onClick={agregarDato}>Agregar</button>
                <span></span>
               
            </div>

            
                <FILtroclase busqueda={busqueda} setbusqueda={setbusqueda}/>

                <TABlaclase  datos={datotabla}  busqueda={busqueda} />
                
        </div>
        )
}
export default FORmularioclase