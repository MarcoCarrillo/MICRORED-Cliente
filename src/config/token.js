import clienteAxios from "./axios";

const tokenAuth = token => {
    if(token){ //Si hay un token lo pasamos al header
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else{ //Si no lo estamos pasando eliminarlo de headers
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;