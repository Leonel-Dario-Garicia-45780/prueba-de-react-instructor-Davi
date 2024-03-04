import '../componentes/tabla.css';
const TABlaclase =({id,nombre,decir})=>{

    return(
        <div>
                <table>
                    <thead>
                        <th className='datos_tabla_clase'>id</th>
                        <th className='datos_tabla_clase'>nombre</th>
                        <th className='datos_tabla_clase'>decir</th>
                    </thead>
                    <tbody>
                        <td className='datos_tabla_clase'>{id}</td>
                        <td className='datos_tabla_clase'>{nombre}</td>
                        <td className='datos_tabla_clase'>{decir}</td>
                    </tbody>
                </table>
        </div>
    )
}
export default TABlaclase