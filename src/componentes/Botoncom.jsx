//cada vez que hay estados o manipulacion del dom deve ir si o si useState
import { useState } from "react";

const BotonCom=()=>{ 

    //const boton   =   document.getElementById("btn")
/*     onchange=()=>{
        console.log("holamundo");
    } */
    
    const onClick=()=>{

    }


    return(
        <div>
            <button id="btn" onClick={()=>console.log("hola mundo")}> boton </button>
            
            <button id="btn" onClick={()=>{console.log("hola mundo");console.log("una instriccion no hay llaves \"{}\" pero si son varias funciones si necesita llaves");}}> boton </button>
        </div>
    )
}
export default BotonCom