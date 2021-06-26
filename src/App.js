import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import LoginEmpresa from './components/auth/LoginEmpresa';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';


function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path ='/' component={LoginEmpresa} />
          <Route exact path ='/login' component={Login} />
          <Route exact path ='/nueva-cuenta' component={NuevaCuenta} />
          <Route exact path ='/proyectos' component={Proyectos} />
        </Switch>
      </Router>
  </ProyectoState>
  );
}

export default App;
