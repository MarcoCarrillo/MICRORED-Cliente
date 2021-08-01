import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos'

const Sidebar = () => {
    return ( 
        <aside>
            <h1><span>Proyectos y Tareas</span> </h1>
			    <img src="http://microred.mx/wp-content/uploads/2018/01/logotipoOk.jpg" alt="logo" />    
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
     );
}
 
export default Sidebar;