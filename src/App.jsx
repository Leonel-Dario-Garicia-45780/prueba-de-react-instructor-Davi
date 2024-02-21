import { useState } from 'react'
import './App.css'
import TablaEnsayo from './componente tabla/tabla_ensayo'
function App() {
  const [count, setCount] = useState(0)

  return (
        <TablaEnsayo/>
    )
}

export default App
