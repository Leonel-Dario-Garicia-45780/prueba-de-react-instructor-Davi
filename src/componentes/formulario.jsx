import "./formulario.css"

const Formulario =()=>{
    var boton_new= document.getElementById("botonnew")
    var emergente= document.getElementById("emergente")
    var sombra =document.getElementById("sombra")
    boton_new.addEventListener( "click", function(){
        emergente.style.display= "blok";
        sombra.style.display="blok"
    })
    
    return(
        <div>
            <button id="botonnew" >new</button>
            <div className="emer_sombra"id="sombra">            </div>
            <div className="emergente_inp"id="emergente">

            <form >
                <input type="text" id="nombre" placeholder="nombre"/>
                <input type="text" id="decir"  placeholder="decir"/>
            </form>
            <div className="botones_emergentes">
                <button>cancelar</button>
                <button>agregar</button>
            </div>
            </div>

        </div>

    )
}

export default Formulario