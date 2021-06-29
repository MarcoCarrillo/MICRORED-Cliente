import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
} from '../../types';
// eslint-disable-next-line
export default (state, action) =>{
    switch (action.type){
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [action.payload,...state.tareas ],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload) 
                //iterar en cada una de las tareas y nos traiga las de id diferente al action.payload
            }
        case ESTADO_TAREA:
            return{
                ...state,
                tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
                //Iterar en cada tarea hasta encontrar el id de la tarea que seleccionamos despues ejecuta el ternario y si si encuentra la tarea ejecuta la funcion para cambiar el estado y si no deja la tarea como estaba
            }
        default:
            return state;
    }
}