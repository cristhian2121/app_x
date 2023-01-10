import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    const [role, setRole] = React.useState(null);
    
    const login = ( username, role ) => {
        
        setUser( {username} );
        setRole( {role} );
        navigate('/miuniforme');
    }

    //Lo necesitamos para la autenticacion
    const auth = { user, login, role };

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
    if ( !auth.user) {
        return <Navigate to={'/'} />
    }

    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
}