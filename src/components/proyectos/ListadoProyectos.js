import React from 'react'
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    
    const proyectos = [
        {nombre: 'Sistema de cableado'},
        {nombre: 'Red LAN'},
        {nombre: 'Sistema de seguridad'}
    ]

    return ( 
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;