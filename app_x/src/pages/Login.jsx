import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Selects from '../components/Selects';
import { Button, Select, MenuItem, InputLabel } from '@mui/material';
import './Login.css';
import { useAuth } from '../components/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const auth = useAuth();

    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({nickName});
        console.log(nickName, password, role);
    };

    if(auth.user) {
        return <Navigate to='/miuniforme/' />
    }

  return (
    <>
        <div className="login">
            <h2>Uniformes la 23</h2>
            
            <div className="form-container">

                <form action="/" className="form" onSubmit={login} >
                    <TextField value={nickName} onChange={e => setNickName(e.target.value) } required id="outlined-required" label="Nick Name" sx={{ mb: 3}} />

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