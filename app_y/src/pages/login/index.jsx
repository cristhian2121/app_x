import React from 'react';
import TextField from '@mui/material/TextField';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import '../../../../app_x/src/pages/Login.css';
import Link from 'next/link';
import { useForm, Controller } from "react-hook-form";
import { useAuth } from '../../hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//import useSessionStorage from '../hooks/useSessionStorage';
//import { useEffect } from 'react';
//import { Route, useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup.string().required().email("Debe ser un email válido"),
});

const Login = () => {

  const contex = useAuth();

  const { handleSubmit, control, formState:{ errors } } = useForm({
    defaultValues: {
        email: "",
        password: "",  
        role: "",          
    },
    resolver: yupResolver(schema)
    
});

  const llamadoEstudiantes = (obj) => {
    const url = 'http://localhost:3100/students/login';
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            email: obj.email,
            password: obj.password,
        }),
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {          
        if(data) {
          contex.login({obj, data});
        } else {
            console.log('false');
        }
    });
  }

  const login = (data, e) => {
    e.preventDefault();
     if(data.role === 'estudiante') {
        llamadoEstudiantes(data); 
    } else {
        llamadoModistas(data);
    }
};

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="login">
          <Typography variant="h3" sx={{ mb: 6, fontFamily: "Montserrat" }}>
            Uniformes la 23
          </Typography>
          <div className="form-container">
            <form action="/" className="form" onSubmit={handleSubmit(login)}>
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
                    error={false}
                    required
                    helperText={errors.email?.message}
                    id="outlined-required"
                    label="Email"
                    sx={{ mb: 3 }}
                  />
                )}
              />

              <Box sx={{ mb: 3, minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de usuario
                  </InputLabel>
                  <Controller
                    control={control}
                    name="role"
                    required
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
              {/* <a href="/">Forgot my password</a> */}
              <Link href="/miuniforme">Forgot my password</Link>
              <Button size="large" variant="outlined">
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Login