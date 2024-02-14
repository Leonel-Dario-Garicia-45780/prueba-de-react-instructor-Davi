import "./home.css"

const Home=()=>{
    const botonnew=document.getElementById("btnew");

    botonnew.addEventListener("click", ()=>{

        
    })

    return(
        <div>
            <table>
            <tr>
                <td><b>id</b></td>
                <td><b>nombre</b></td>
                <td><b>decir</b></td>
                <td><b>acciones</b></td>
            </tr>
            <tr>
                <td>0</td>
                <td>juan</td>
                <td>a programar</td>
                <td>
                    <button className="boton1">eliminar</button>
                    o
                    <button className="boton1">editar</button>
                </td>
            </tr>
            </table>

            <button id="btnew"  className="botonnew">new</button>

        </div>
    )


}
export default Home