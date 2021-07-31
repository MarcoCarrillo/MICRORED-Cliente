import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = (props) => {

    //Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;

    //En caso de que el usuario o password no exista
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    },[mensaje, autenticado, props.history]); 

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    })

    //Extraer de usuario el password y el email
    const {email, password} = usuario;

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiera iniciar sesion
    const onSubmit = e =>{
        e.preventDefault();

        //validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Pasarlo al action.payload
        iniciarSesion({ email, password });
    }

    return ( 
        <div className='form-usuario'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) :null} 
            <div className='contenedor-form sombra-dark'>
                <h1> 
                    <img src="http://microred.mx/wp-content/uploads/2018/01/logotipoOk.jpg" alt="logo" />
                </h1>
                

                <form
                    onSubmit={onSubmit}
                >   
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu correo electronico'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Contraseña</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu contraseña'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesión'
                        />
                    </div>
                </form> 

                
            </div>
            <Link to={'nueva-cuenta'} className='enlace-cuenta' >
                .
            </Link>
        </div>
        
     );
}
 
export default Login;