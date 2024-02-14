import { useState } from 'react'
import './App.css'

import Home from "./componentes/home.jsx"

import { BrowserRouter, useRoutes  } from "react-router-dom";

const AppRoutes = () => {

  const router = useRoutes([
    { path: "/", element: <Home /> },
  ]);

  return router;
};


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App
