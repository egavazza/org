import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método MAP -> arreglo.map ( (1ª recibe el elemento de equipos, 2ª recibe index de c/elemento) => {
    //        return <option></option>
    //      })

    const manejarCambio = (e) => {
        console.log("CAMBIO", e.target.value);
        props.setEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.value} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
           { props.equipos.map( (equipo, index) => {
            return <option key={index}>{equipo}</option>
           } ) }
        </select>
    </div>
}

export default ListaOpciones
