import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext;

    //Funcion para agregar el proyecto actual
    const seleccionarProyecto = id =>{
        proyectoActual(id); //Fijar un proyecto actual
        obtenerTareas(id); //Filtrar las tareas cuando se de clic
    }

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={()=>seleccionarProyecto(proyecto._id)}  //Si damos clic en uno de los proyectos corre la funcion, le pasa el id del proyecto actual, proyecto actual va al state y le pasa como payload el id, evalua el reducer y comienza a iterar entre cada proyecto hasta que encuentra el mismo id al que le dimos clic y lo va filtrar   
            >
            {proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;