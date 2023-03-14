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
//import { useAuth } from '../components/auth';
//import { Controller } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from "yup";
//import useSessionStorage from '../hooks/useSessionStorage';
//import { useEffect } from 'react';
//import { Route, useNavigate } from 'react-router-dom';


const Login = () => {

  return (
    <>
    <Box sx={{height: '100vh' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="login">
        <Typography variant='h3' sx={{mb: 6, fontFamily: 'Montserrat'}}>Uniformes la 23</Typography>
        <div className="form-container">
          <form
            action="/"
            className="form"
            //onSubmit={handleSubmit(login)}
          >

                <TextField
                  //{...field}
                  // onBlur={(e) => {
                  //     //... proceso
                  //     field.onBlur(e)
                  // }}
                  error={false}
                  required
                  //helperText={errors.email?.message}
                  id="outlined-required"
                  label="Email"
                  sx={{ mb: 3 }}
                />

            {/* En caso de un email no valido */}
            {/* {errors.email ? <Typography sx={{ textAlign: 'center' }} variant='overline'>{errors.email.message}</Typography> : null} */}

            {/* Input anterior para el email */}
            {/* <TextField value={nickName} onChange={e => setNickName(e.target.value) } required id="outlined-required" label="Email" sx={{ mb: 3}} /> */}

            <Box sx={{ mb: 3, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Tipo de usuario
                </InputLabel>

                    <Select
                      //{...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Tipo de usuario"
                    >
                      <MenuItem value="estudiante">Estudiante</MenuItem>
                      <MenuItem value="modista">Modista</MenuItem>
                    </Select>

              </FormControl>
            </Box>

                <TextField
                  //value={password}
                  //onChange={e => setPassword(e.target.value) }
                  //{...field}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  sx={{ mb: 3 }}
                />


            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ mb: 3 }}
            >
              Log in
            </Button>
            <a href="/">Forgot my passwordsss</a>
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