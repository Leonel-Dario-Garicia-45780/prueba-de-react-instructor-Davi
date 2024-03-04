import { useState } from "react"

const Botonclick=()=>{

    const [clik,setclik ]=useState(0)

    return(
        <div>
            {/*set clik es como tal una fumcion, trate de sacrla pero no se puede */} 
            <button onClick={()=> setclik(clik+1, alert("fjvnnaidfnaif"))} > has dado tantos clicks {clik}  </button>
         
        </div>
    )

}

export default Botonclick