import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
    TAREAS_PROYECTO
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas:[  
            {nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true, proyectoId: 1},
            {nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false, proyectoId: 2},
            {nombre:'Instalacion',fecha: '2021/07/22', estado: true, proyectoId: 3},
            {nombre:'Recibir pago', fecha: '2022/03/18',estado: false, proyectoId: 4},
            {nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true, proyectoId: 4},
            {nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false, proyectoId: 3},
            {nombre:'Instalacion',fecha: '2021/07/22', estado: true, proyectoId: 2},
            {nombre:'Recibir pago', fecha: '2022/03/18',estado: false, proyectoId: 1},
            {nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true, proyectoId: 2},
            {nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false, proyectoId: 3},
            {nombre:'Instalacion',fecha: '2021/07/22', estado: true, proyectoId: 4},
            {nombre:'Recibir pago', fecha: '2022/03/18',estado: false, proyectoId: 1}
        ]
    }

    //Crear el dispatch y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;