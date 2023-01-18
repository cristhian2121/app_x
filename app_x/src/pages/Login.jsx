import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import './Login.css';
import { useAuth } from '../components/auth';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required().email("Pon un email"),
  });

const Login = () => {
    console.log("Rendered");

    const auth = useAuth();

    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    
    const [dataForm, setDataForm] = useState(null);

    const { handleSubmit, control, formState:{ errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",  
            role: "",          
        },
        resolver: yupResolver(schema)
        
    });

    //ToDO
    // funcion para llamado de modistas llamadomodistas
    // pasarle el rol al auth para validar rutas
    // localstorage

    const llamadoEstudiantes = () => {
            console.log(dataForm);

            const url = 'http://localhost:3100/students/login';
            const options = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: dataForm.email,
                    password: dataForm.password,
                }),
            }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data) {
                    auth.login({dataForm, data});
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
                auth.login({nickName, role});
            } else {
                console.log('false');
            }
  });
}

    const login = (data) => {
        //e.preventDefault();

        setDataForm(data);
         if(data.role === 'estudiante') {
            llamadoEstudiantes(); 
        } else {
            llamadoModistas();
        }
    };

  return (
    <>
      <div className="login">
        <h1>Uniformes la 23</h1>

        <div className="form-container">
          <form
            action="/"
            className="form"
            onSubmit={handleSubmit(login)}
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  // onBlur={(e) => {
                  //     //... proceso
                  //     field.onBlur(e)
                  // }}
                  required
                  id="outlined-required"
                  label="Email"
                  sx={{ mb: 3 }}
                />
              )}
            />
            {errors.Email ? <p>{errors.Email.message}</p> : null}

            {/* <TextField value={nickName} onChange={e => setNickName(e.target.value) } required id="outlined-required" label="Email" sx={{ mb: 3}} /> */}

            <Box sx={{ mb: 3, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Tipo de usuario
                </InputLabel>
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Tipo de usuario"
                    >
                      <MenuItem value="estudiante">Estudiante</MenuItem>
                      <MenuItem value="modista">Modista</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Box>

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  //value={password}
                  //onChange={e => setPassword(e.target.value) }
                  {...field}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ mb: 3 }}
            >
              Log in
            </Button>
            <a href="/">Forgot my password</a>

            <Button size="large" variant="outlined">
              Sign up
            </Button>


          </form>
        </div>
      </div>
    </>
  );
}

export default Login