import { useState } from "react";
import Comph1 from "./com_usestate";

 const InputCom =()=>{      

        const[inputt,setinputt]=useState("holaaaaaaaaaaaa")

        onchange=(console.log(inputt))
        
        return(
            <div>
                {/*este es mi input*/ }
                <input type="text" placeholder="mi primer input" onChange={(event)=>{setinputt(event.target.value)}}/>

                <Comph1 htexto={inputt} />

            </div> 
        )
 }

export default InputCom