

// Componente Padre (Tabla)
import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';

const Tabla = () => {
  const [datos, setDatos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Al cargar el componente, intenta obtener los datos almacenados en localStorage
  useEffect(() => {
    const datosGuardados = localStorage.getItem('datos');
    if (datosGuardados) {
      setDatos(JSON.parse(datosGuardados));
    }
  }, []);

  const agregarDato = (nuevoDato) => {
    const id = datos.length + 1;
    const nuevosDatos = [...datos, { id, ...nuevoDato }];
    setDatos(nuevosDatos);
    // Guardar los datos en localStorage
    localStorage.setItem('datos', JSON.stringify(nuevosDatos));
  };

  const editarDato = (id, nuevoDato) => {
    const nuevosDatos = datos.map((dato) => {
      if (dato.id === id) {
        return { ...dato, ...nuevoDato };
      }
      return dato;
    });
    setDatos(nuevosDatos);
    // Actualizar los datos en localStorage
    localStorage.setItem('datos', JSON.stringify(nuevosDatos));
  };

  const eliminarDato = (id) => {
    const nuevosDatos = datos.filter((dato) => dato.id !== id);
    setDatos(nuevosDatos);
    // Actualizar los datos en localStorage
    localStorage.setItem('datos', JSON.stringify(nuevosDatos));
  };

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const mostrarDatosLocalStorage = () => {
    const datosGuardados = localStorage.getItem('datos');
    if (datosGuardados) {
      alert('Datos en localStorage: ' + datosGuardados);
    } else {
      alert('No hay datos almacenados en localStorage.');
    }
  };

  return (
    <div>
      <button onClick={toggleFormulario}>
        {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      <button onClick={mostrarDatosLocalStorage}>Mostrar Datos de localStorage</button>
      {mostrarFormulario && <Formulario onAgregar={agregarDato} />}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Comentario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td className='datosTabla'>{dato.id}</td>
              <td className='datosTabla'>{dato.nombre}</td>
              <td className='datosTabla'>{dato.comentario}</td>
              <td className='datosTabla'>
                <button onClick={() => editarDato(dato.id, { nombre: 'Nuevo Nombre', comentario: 'Nuevo Comentario' })}>Editar</button>
                <button onClick={() => eliminarDato(dato.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
