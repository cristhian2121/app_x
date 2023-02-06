import React, { createContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useSessionStorage from '../hooks/useSessionStorage';


//docker compose up --build --force-recreate

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [userSession, setUserSession] = useSessionStorage("user");
    const [user, setUser] = useState( userSession ? userSession : null); // useReducer, setUser = null (useeffect) -> logout

    const login = ( userinfo ) => {
        setUser( userinfo );
        setUserSession(userinfo);
        userinfo.obj.role === "estudiante" ? navigate('/miuniforme') : navigate('/estudiantes');
    }
    const logout = () => {
        setUser(null);
        setUserSession({});
        navigate('/');
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
    const auth = React.useContext(AuthContext);
    console.log(auth, 'hook auth')
    return auth;
}

//es un componente para evitar escribir Navigate en los componentes donde 
//querramos proteger una ruta
function AuthRoute(props) {
    const auth = useAuth();
    console.log(auth, 'authroute')
    if ( auth.user === null  ) {
        return <Navigate to={'/'} />
    } 
    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
}