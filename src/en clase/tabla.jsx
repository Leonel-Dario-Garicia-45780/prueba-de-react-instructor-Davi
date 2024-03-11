import "../en clase/tablaclase.css"

const TABlaclase =({datos, busqueda})=>{

    const filtro_de_datos = datos.filter((dato) => {
        return (
          dato.id.toLowerCase().includes(busqueda.toLowerCase()) ||
          dato.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          dato.decir.toLowerCase().includes(busqueda.toLowerCase())
        );
      });

    return(
        <div className="tabla_contenedor">
                <table>
                    <thead>
                        <th className='datos_tabla_clase'>id</th>
                        <th className='datos_tabla_clase'>nombre</th>
                        <th className='datos_tabla_clase'>decir</th>
                    </thead>
                    <tbody>
                       {/* como es un objeto tiene que ir esto si o si el kei ={inex}  */}
                    {filtro_de_datos.map((dato, index) => (
                        <tr key={index}>
                            <td className="datos_tabla_clase">{dato.id}</td>
                            <td className="datos_tabla_clase">{dato.nombre}</td>
                            <td className="datos_tabla_clase">{dato.decir}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    )
}
export default TABlaclase