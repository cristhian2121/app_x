import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const users = [
    {
        nickName: 'Adri',
        password: 'mctqL3QH85',
        role: 'estudiante',

    },
    {
        nickName: 'César',
        password: 'L1xa5PdDqGuE',
        role: 'estudiante',
    },
    {
        nickName: 'Maria',
        password: 'pjTmKWciX',
        role: 'estudiante',
    },
]

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    
    const login = ( username ) => {
        
        setUser( {username} );
        navigate('/miuniforme');
    }

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