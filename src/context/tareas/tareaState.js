import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas:[  
            {id: 1,nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true, proyectoId: 1},
            {id: 2,nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false, proyectoId: 2},
            {id: 3,nombre:'Instalacion',fecha: '2021-07-22', estado: true, proyectoId: 3},
            {id: 4,nombre:'Recibir pago', fecha: '2022-03-18',estado: false, proyectoId: 4},
            {id: 5,nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true, proyectoId: 4},
            {id: 6,nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false, proyectoId: 3},
            {id: 7,nombre:'Instalacion',fecha: '2021-07-22', estado: true, proyectoId: 2},
            {id: 8,nombre:'Recibir pago', fecha: '2022-03-18',estado: false, proyectoId: 1},
            {id: 9,nombre:'Reconocimiento del lugar', fecha: '2021-04-30' ,estado: true, proyectoId: 2},
            {id: 10,nombre:'Ir al lugar mañana a las 5',fecha: '2021-07-20', estado: false, proyectoId: 3},
            {id: 11,nombre:'Instalacion',fecha: '2021-07-22', estado: true, proyectoId: 4},
            {id: 12,nombre:'Recibir pago', fecha: '2022-03-18',estado: false, proyectoId: 1}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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

    //Agregar una nueva tarea
    const agregarTarea = tarea =>{
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar las tareas por su id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para editarla
    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Edita una tarea
    const actualizarTarea = tarea =>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea 
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;