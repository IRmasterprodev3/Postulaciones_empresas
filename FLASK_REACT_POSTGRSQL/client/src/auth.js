/* PROVEEDOR DEL TOKEN PARA USUARIO PODER ACCEDER A RUTA 
DESDE REPOSITORIO DE GITHUB -> "npm install react-token-auth"*/

/* ***** EL MISMO AUTOR MENCIONA, NO RECOMENDABLE UTILIZAR EN PROYECTOS MASIVOS ***** 
    **** SOLO SE UTILIZA PARA EFECTOS DE DEMOSTRACIÓN EN ESTE PROYECTO *****/

import { createAuthProvider } from 'react-token-auth';

//Función simple que crea un acceso
export const { useAuth, authFetch, login, logout } = 
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => 
            fetch('/auth/refresh', {
            method: 'POST',
            body: token.refresh_token
        })
        .then(r => r.json())
    })