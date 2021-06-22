import React, {Fragment} from 'react'
import Tarea from '../tareas/Tarea'

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true},
        {nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false},
        {nombre:'Instalacion',fecha: '2021/07/22', estado: true},
        {nombre:'Recibir pago', fecha: '2022/03/18',estado: false}
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
                className='btn btn-eliminar sombra'
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;