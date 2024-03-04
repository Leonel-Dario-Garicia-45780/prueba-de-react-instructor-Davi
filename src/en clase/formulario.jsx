import { useState } from "react"
import TABlaclase from "./tabla"

const FORmularioclase =()=>{
    const [id,setid]=useState("")
    const [nombre,setnombre]=useState("")
    const [decir,setdecir]=useState("")
    
    console.log(id)
    console.log(nombre)
    console.log(decir)
    
    return(
            <div>
                <input type="text" placeholder="id"      onChange={(event)=>{setid(event.target.value)}}/>
                <input type="text" placeholder="nombre"  onChange={(event)=>{setnombre(event.target.value)}}/>
                <input type="text" placeholder="decir"   onChange={(event)=>{setdecir(event.target.value)}}/>


                <TABlaclase  id={id} nombre={nombre} decir={decir} />
            </div>
        )
}
export default FORmularioclase