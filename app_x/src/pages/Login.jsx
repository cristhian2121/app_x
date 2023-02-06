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
import './Login.css';
import { useAuth } from '../components/auth';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useSessionStorage from '../hooks/useSessionStorage';

const schema = yup.object({
    email: yup.string().required().email("Debe ser un email válido"),
  });

const Login = () => {
    console.log("Rendered");

    const [_, saveUsers] = useSessionStorage('user');
    const auth = useAuth();
    
/*
const [nickName, setNickName] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('');
const [dataForm, setDataForm] = useState(null);
*/

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

    const llamadoEstudiantes = (obj) => {
            //console.log(obj, 'Credenciales para login');

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
                //console.log(data, "Return del post para login");
                if(data) {
                    auth.login({obj, data});
                } else {
                    console.log('false');
                }
      });
    }

    const llamadoModistas = (obj) => {
        const url2 = 'http://localhost:3100/dressMakers/login';
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

    fetch(url2, options)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data, "Return del post para login");
            if(data) {
                auth.login({obj, data});
            } else {
                console.log('false');
            }
  });
}

    const login = (data) => {
        //e.preventDefault();
        
        //setDataForm(data);
         if(data.role === 'estudiante') {
            llamadoEstudiantes(data); 
        } else {
            llamadoModistas(data);
        }
    };

  return (
    <>
    <Box sx={{height: '100vh' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="login">
        <Typography variant='h3' sx={{mb: 6, fontFamily: 'Monospace'}}>Uniformes la 23</Typography>
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
                  error={false}
                  required
                  helperText={errors.email?.message}
                  id="outlined-required"
                  label="Email"
                  sx={{ mb: 3 }}
                />
              )}
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
      </Box>
    </>
  );
}

export default Login