import React, {useContext, useState} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {errortarea, agregarTarea, validarTarea, obtenerTareas} = tareasContext;

    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre:'',
        fecha:''
    })

    //Extraer nombre y fecha del proyecto
    const {nombre, fecha} = tarea;

    //Leer los valores del form
    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para extraer posicion proyecto actual
    const [proyectoActual] = proyecto; 

    const onSubmit = e =>{
        e.preventDefault();
        //Validar
        if(nombre.trim() === '' || fecha.trim() === ''){
            validarTarea();
            return;
        }
        //Pasar validacion

        //Agregar nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        //Obtener y filtrar tareas del proyecto actual}
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre:'',
            fecha:''
        })
    }
    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                    <label className='label-formTarea'>Tarea</label>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nombre de la tarea'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="campo-form">
                    <label className='label-formTarea' >Fecha de finalizacion</label>
                    <input 
                        type='date'
                        className='input-date'
                        name='fecha'
                        value={fecha}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
            {
                errortarea ? <p className='mensaje error'>Todos los campos son obligatorios</p>
                :null
            }
        </div>
     );
}
 
export default FormTarea;