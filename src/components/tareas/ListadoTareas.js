import React, {Fragment} from 'react'
import Tarea from '../tareas/Tarea'

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre:'Reconocimiento del lugar', estado: true},
        {nombre:'Ir al lugar mañana a las 5', estado: false},
        {nombre:'Instalacion', estado: true},
        {nombre:'Recibir pago', estado: false}
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: Sistema de cableado</h2>
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
                className='btn btn-eliminar'
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;