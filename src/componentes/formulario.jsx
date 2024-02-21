// Componente Hijo (Formulario)
import React, { useState } from 'react';
import "./formulario.css"
const Formulario = ({ onAgregar }) => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== '' && comentario.trim() !== '') {
      onAgregar({ nombre, comentario });
      setNombre(''); // Limpiar el campo de nombre después de agregar el dato
      setComentario(''); // Limpiar el campo de comentario después de agregar el dato
    } else {
      alert('Por favor, complete ambos campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className='parametros'
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
        <br />
      <input
      className='parametros'
        placeholder="Comentario"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <br />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
