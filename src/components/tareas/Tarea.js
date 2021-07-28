import React, {useContext} from 'react'
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    //State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;

    //Extraer el proyecto
    const [proyectoActual] = proyecto;

    //Funcion que se ejecuta al presionar el btn de eliminar tarea
    const tareaEliminar = id =>{
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas();
        obtenerTareas(proyectoActual.id)
    }

    //Funcion para modificar el estado de las tareas
    const cambiarEstado = tarea =>{
        //Se modifica la tarea
        if(tarea.estado){
            tarea.estado=false;
        }else{
            tarea.estado=true;
        }
        //Se pasa la funcion de cambiarEstadoTarea para el dispatch
        cambiarEstadoTarea(tarea);
    }

    //Poner en activo la tarea actual cuando el usuario quiera editarla
    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
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
                        (<button 
                            type='button' 
                            className='completo'
                            onClick={()=>cambiarEstado(tarea)} //Como arrow funct para poder pasar parametro
                            >Completo</button>)
                    :
                        (<button 
                            type='button' 
                            className='incompleto'
                            onClick={()=>cambiarEstado(tarea)}
                            >Inompleto</button>)
                }
            </div>
            <div className="acciones">
                <button 
                    type='button' 
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}
                    >Editar</button>
                <button 
                    type='button' 
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea._id)}
                    >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;