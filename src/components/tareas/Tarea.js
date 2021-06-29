import React, {useContext} from 'react'
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    //State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas} = tareasContext;

    //Extraer el proyecto
    const [proyectoActual] = proyecto;

    //Funcion que se ejecuta al presionar el btn de eliminar tarea
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas();
        obtenerTareas(proyectoActual.id)
    }

    return ( 
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div>
                <p className='fecha'>Límite: {tarea.fecha}</p>
            </div>
            <div className="estado">
                {tarea.estado 
                    ?  
                        (<button type='button' className='completo'>Completo</button>)
                    :
                        (<button type='button' className='incompleto'>Inompleto</button>)
                }
            </div>
            <div className="acciones">
                <button type='button' className='btn btn-primario'>Editar</button>
                <button 
                    type='button' 
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea.id)}
                    >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;