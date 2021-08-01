import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';
// eslint-disable-next-line
export default (state, action) =>{
    switch (action.type){
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto: action.payload //Porque la consulta ya filtra las tareas del proyecto
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareasproyecto: [...state.tareasproyecto, action.payload],
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
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload) 
                //iterar en cada una de las tareas y nos traiga las de id diferente al action.payload
            }
        case ACTUALIZAR_TAREA:
            return{
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
                //Iterar en cada tarea hasta encontrar el id de la tarea que seleccionamos despues ejecuta el ternario y si si encuentra la tarea ejecuta la funcion para cambiar el estado y si no deja la tarea como estaba
                
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload
                //En la tarea seleccionada colocamos la que se seleccione
            }
        case LIMPIAR_TAREA:
            return{
                ...state,
                tareaseleccionada: null
            }
        default:
            return state;
    }
}