import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';
import clienteAxios from '../../config/axios';

const ProyectoState = props =>{

    const initialState ={
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Funciones para el crud
    const mostrarFormulario = ()=>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener proyectos
    const obtenerProyectos = async () =>{
        try{
            const resultado = await clienteAxios.get('/api/proyectos');
            // console.log(resultado);
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data
            })
        }
        catch(error){
            console.log(error);
        }
    }

    const agregarProyecto = async proyecto =>{
        try{
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        }   catch(error){
            console.log(error)
        }
    }
    
    //Validar formulario por errores
    const mostrarError = ()=>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Cuando el usuario selecciona un proyecto y se pone en activo
    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = proyectoId=>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }


    //props.children para pasar los componentes hijos del provider a otros componentes
    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children} 
        </proyectoContext.Provider>
    )
}

export default ProyectoState;