import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineStar, AiFillStar } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorDestaque, eliminarColaborador, like } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorDestaque}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/* { fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} /> } */}
            { fav ? <AiFillStar color="#ffd300" onClick={() => like(id)} /> : <AiOutlineStar onClick={() => like(id)} /> }
        </div>
    </div>
}

export default Colaborador
