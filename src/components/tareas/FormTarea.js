import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    //Extraer el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para extraer posicion proyecto actual
    const [proyectoActual] = proyecto; 

    return ( 
        <div className="formulario">
            <form>
                <div className="campo-form">
                    <label className='label-formTarea' htmlFor='tarea'>Tarea</label>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nombre de la tarea'
                        name='nombre'
                    />
                </div>
                <div className="campo-form">
                    <label className='label-formTarea' htmlFor='fecha'>Fecha de finalizacion</label>
                    <input 
                        type='date'
                        value='Fecha de finalizacion'
                        className='input-date'
                        name='fecha'
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
        </div>
     );
}
 
export default FormTarea;