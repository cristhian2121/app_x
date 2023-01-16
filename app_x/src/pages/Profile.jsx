import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/auth'
import StudentsList from './StudentsList';

const Profile = () => {

  let id = '63b8ed901b7fc428d0dc0f63';
  let url = `http://localhost:3100/students/${id}`;

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    
    fetch(url)
              .then((res) => res.json())
              .then((data) => {
                  console.log(data);
                  setUsuario(data);
        });

  }, [])
  

  

    const auth = useAuth();

  return (
    <Container sx={{ height: "100vh" }} >
        <Typography variant='h2' sx={{p: 2}}>
            {auth.user.username.nickName}
        </Typography>

        <Typography variant='h3'>
          {`${usuario.firstName} ${usuario.lastName}`}
        </Typography>
          {`Talla: ${usuario.shirtSize}`}
    </Container>
  )
}

export default Profile