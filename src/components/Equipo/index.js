import "./Equipo.css";
import "../Colaborador";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const { titulo, colorDestaque, colorFondo, id } = props.datos
    const { colaboradores,eliminarColaborador, actualizarColor, like } = props

return <>
        { colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorDestaque, 0.6) }}>
            <input
                type='color'
                className="input-color"
                value={{backgroundColor: hexToRgba(colorDestaque, 0.6)}}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={{ borderColor: colorDestaque }}>{titulo}</h3>
            <div className="colaboradores">
                { colaboradores.map ( (colaborador, index) =>
                    <Colaborador
                        datos={colaborador}
                        key={index}
                        colorDestaque={colorDestaque}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }
            </div>
            </section>
        }
    </>
}

export default Equipo
