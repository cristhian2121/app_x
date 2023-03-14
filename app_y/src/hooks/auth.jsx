'use client';

import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';

import useSessionStorage from './useSessionStorage';


//docker compose up --build --force-recreate

const AuthContext = createContext();

const AuthProvider = ({children}) => {        
    const [userFromSession, setUserSession] = useSessionStorage("user")
    const [user, setUser] = React.useState(userFromSession?.nickName ? { data: userFromSession} : null); // useReducer, setUser = null (useeffect) -> logout    

    //Cuando se recargue la pagina esto revisa si hay un user ya
    if(userFromSession?.data && !user){
        setUser(userFromSession)
    }

    const login = ( userinfo ) => {     
        setUser( userinfo );   
        setUserSession(userinfo)     
    }

    const logout = () => {        
        setUser(null)
        setUserSession({})
    }

    //Lo necesitamos para la autenticacion
    const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
  )
}

//Para evitar escribir useContext en los componentes 
function useAuth() {
    const router = useRouter();
    const context = React.useContext(AuthContext);
    
    const login = ( userinfo ) => {
        context.login(userinfo)
        // Redirect
        userinfo.obj.role === "estudiante" ? router.push('/miuniforme') : router.push('/estudiantes');
    }

    const logout = () => {
        context.logout()
        // Redirect
        router.push('/');
    }

    return {auth: context.user, login, logout};
}

//es un componente para evitar escribir Navigate en los componentes donde 
//querramos proteger una ruta
function AuthRoute(props) {
    const auth = useAuth();
    if (!auth) {
        console.log("no exists");
        // return <Navigate to={'/'} />
    }
    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
}