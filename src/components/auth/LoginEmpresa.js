import React, {useState} from 'react';

const Login = () => {

    //State para iniciar sesion
    const [usuarioEmpresa, guardarUsuarioEmpresa] = useState({
        usuario:'',
        password:''
    })

    //Extraer de usuario el password y el usuario
    const {usuario, password} = usuarioEmpresa;

    const onChange = e =>{
        guardarUsuarioEmpresa({
            ...usuarioEmpresa,
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
                <h1> 
                    <img src="http://microred.mx/wp-content/uploads/2018/01/logotipoOk.jpg" alt="logo" />
                </h1>

                <form
                    onSubmit={onSubmit}
                >   
                    <div className='campo-form'>
                        <label htmlFor='usuario'>Usuario</label>
                        <input 
                            type='text'
                            id='usuario'
                            name='usuario'
                            placeholder='Usuario de la empresa'
                            value={usuario}
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

                <a href='https://google.com' className='enlace-cuenta'>
                    <h3>Pulsa aqui si no perteneces a la empresa</h3>
                </a>
            </div>
        </div>
     );
}
 
export default Login;