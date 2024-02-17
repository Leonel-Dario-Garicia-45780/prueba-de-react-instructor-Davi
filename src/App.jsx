import { useState } from 'react'

import Tabla from './componentes/tabla'
import Formulario from "./componentes/formulario"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Tabla/>
    </div>
  )
}

export default App