//Cambia el state 
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';
// eslint-disable-next-line
export default (state, action) =>{ // eslint-disable-next-line
    switch (action.type){
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true 
            }
        case OBTENER_PROYECTOS:
            console.log(action.payload);
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload], //Se agrega el proyecto al [{}]
                formulario: false, //Reinicia el form
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                //Quitar el proyecto de activo para que se refresque esa pantalla
                proyecto: null
            }
        default:
            return state;
    }

}