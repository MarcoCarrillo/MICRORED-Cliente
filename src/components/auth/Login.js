import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

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
        e.preventDefault()

    }

    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesión</h1>

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

                <Link to={'nueva-cuenta'} className='enlace-cuenta' >
                    ¿Aun no tienes una cuenta? Registrate AQUI
                </Link>
            </div>
        </div>
     );
}
 
export default Login;