import { useState } from 'react'

// importaciones de la carpeta componentes
import Tabla from './componentes/tabla'
import Hola from './componentes/Hola'
import Holaprops from './componentes/Holaprops'
import BotonCom from './componentes/Botoncom'
import Modal from './componentes/modal'
import PersonasCom from './componentes/arraiPersonas'
import InputCom from './componentes/Inputcom'
import InputInstCom from './componentes/input_instructor'
import Comph1 from './componentes/com_usestate'
import Botonclick from './componentes/botomclik'

//importaciones de la carpeta clase
import FORmularioclase from './en clase/formulario'


//import Modal from './componentes/modal'
function App() {
  const [count, setCount] = useState(0)

  const Personas =[
    {id:"1", nombre:"gera",apellido:"tttt"},{id:"2", nombre:"martos",apellido:"eeee"},{id:"3", nombre:"sair",apellido:"jjj"}]


  /* const [showmodal,setShowmodal]=useState(false)
  const abirModal=()=> setShowmodal(true)
  const cerrarModal=()=> setShowmodal(false)
 */
  return (
  <div>


    {/* Personas.map( Personas=><PersonasCom nombre={Personas.nombre} apellido={Personas.apellido}/>) */}
{/*     <Hola nombre="Leo" />
    <Holaprops nombre="martos"/>
     
     <BotonCom/>
      
    <InputCom/>

     <Botonclick/>
     */}
    
{/*     <Tabla/> */}



 {/* enn clase  */}

<FORmularioclase/>


 
  </div>
  )
}

export default App