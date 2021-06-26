import React, {Fragment, useContext} from 'react'
import Tarea from '../tareas/Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    //State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer posicion proyecto actual
    const [proyectoActual] = proyecto; 

    const tareasProyecto = [
        {nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true},
        {nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false},
        {nombre:'Instalacion',fecha: '2021/07/22', estado: true},
        {nombre:'Recibir pago', fecha: '2022/03/18',estado: false}
    ]

    //Elimina un proyecto
    const onClickEliminar = ()=>{
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 ? (<li className='tarea'>No hay tareas</li>) 
                    : tareasProyecto.map(tarea =>(
                        <Tarea 
                            tarea={tarea}
                        />
                    )) 
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar sombra'
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;