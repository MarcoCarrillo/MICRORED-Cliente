import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {

    //State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={()=>proyectoActual(proyecto.id)}  //Si damos clic en uno de los proyectos corre la funcion, le pasa el id del proyecto actual, proyecto actual va al state y le pasa como payload el id, evalua el reducer y comienza a iterar entre cada proyecto hasta que encuentra el mismo id al que le dimos clic y lo va filtrar   
            >
            {proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;