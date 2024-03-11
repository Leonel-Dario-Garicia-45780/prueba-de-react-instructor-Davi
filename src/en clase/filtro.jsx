import "../en clase/filtroclase.css"

const FILtroclase=({ busqueda, setbusqueda }) => {

  return (
    <div className="filtro_contenedor">
      <input className="filtro_input"
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(event) => setbusqueda(event.target.value)}
      />
    </div>
  );
};


export default FILtroclase