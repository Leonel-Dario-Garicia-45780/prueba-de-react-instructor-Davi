import { useState } from 'react'

import Tabla from './componentes/tabla'
import Modal from './componentes/modal'
//importacion del modal
//import Modal from './componentes/modal'
function App() {
  const [count, setCount] = useState(0)
//constante del modal
  /* const [showmodal,setShowmodal]=useState(false)
  const abirModal=()=> setShowmodal(true)
  const cerrarModal=()=> setShowmodal(false)
 */
  return (
  <div>
    <Tabla/>
    {/* <button onClick={abirModal}> abrir Modal</button>
    {showmodal&&( 
                <Modal onClose={cerrarModal}>
                   <h2>holaaa</h2>
                </Modal>)  
    } */}
  </div>
  )
}

export default App