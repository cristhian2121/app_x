import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useSessionStorage from '../hooks/useSessionStorage';


//docker compose up --build --force-recreate

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null); // useReducer, setUser = null (useeffect) -> logout
    //const [userSession, setUserSession] = useSessionStorage("user")
    const [value, saveUser] = useSessionStorage("user");

    const login = ( userinfo ) => {
        
        setUser( userinfo );
        // saveUser(userinfo)

        //console.log( userinfo );
        //console.log("Este rol es:", username.role);

        userinfo.obj.role === "estudiante" ? navigate('/miuniforme') : navigate('/estudiantes');
    }

    // const logout = () => {
        // setUserSession(userinfo)   
    // }

    //Lo necesitamos para la autenticacion
    const auth = { user, login };

  return (
    <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
  )
}

//Para evitar escribir useContext en los componentes 
function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

//es un componente para evitar escribir Navigate en los componentes donde 
//querramos proteger una ruta
function AuthRoute(props) {
    const auth = useAuth();
    const [users] = useSessionStorage("user");
    if ( !users) {
        return <Navigate to={'/'} />
    }
    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
}