import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Selects from '../components/Selects';
import { Button } from '@mui/material';
import './Login.css';
import { useAuth } from '../components/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const auth = useAuth();

    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    //ToDO
    // funcion para llamado de modistas llamadomodistas
    // pasarle el rol al auth para validar rutas
    // localstorage

    const llamadoEstudiantes = () => {

            const url = 'http://localhost:3100/students/login';
            const options = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: nickName,
                    password: password,
                }),
            }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if(data) {
                    auth.login({nickName, role});
                } else {
                    console.log('false');
                }
      });
    }

    const llamadoModistas = () => {
        const url2 = 'http://localhost:3100/dressMakers/login';
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                password: password,
                email: nickName,
            }),
        }

    fetch(url2, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            if(data) {
                auth.login({nickName});
            } else {
                console.log('false');
            }
  });
}

    const login = (e) => {
        e.preventDefault();
        console.log(nickName, password, role);
         if(role === 'estudiante') {
            llamadoEstudiantes(); 
        } else {
            llamadoModistas();
        }
    };

    if(auth.user) {
        return <Navigate to='/miuniforme/' />
    }

  return (
    <>
        <div className="login">
            <h1>Uniformes la 23</h1>
            
            <div className="form-container">

                <form action="/" className="form" onSubmit={login} >
                    <TextField value={nickName} onChange={e => setNickName(e.target.value) } required id="outlined-required" label="Email" sx={{ mb: 3}} />

                    <Selects role={role} setRole={setRole} />

                    <TextField value={password} onChange={e => setPassword(e.target.value) } id="outlined-password-input" label="Password" type="password" autoComplete="current-password" sx={{ mb: 3}} />

                    <Button type='submit' size="large" variant="contained" sx={{ mb: 3}} >Log in</Button>
                    <a href="/">Forgot my password</a>

                    <Button size="large" variant="outlined" >Sign up</Button>
                </form>
            </div>
        </div>
    </>
)
}

export default Login