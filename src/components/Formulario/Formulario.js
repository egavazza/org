import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => { //El "evento" también podemos encontrarlo como "event" o "e"//
        evento.preventDefault();
        console.log ("Manejar el envío");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorDestaque: color })
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Complete el formulario para crear un colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                value={nombre}
                setValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                value={puesto}
                setValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                value={foto}
                setValor={actualizarFoto}
            />
            <ListaOpciones
                value={equipo}
                setEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Complete el formulario para crear un equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                value={titulo}
                setValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en valor HEX"
                required
                value={color}
                setValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar Equipo" />
        </form>
    </section>
}

export default Formulario
