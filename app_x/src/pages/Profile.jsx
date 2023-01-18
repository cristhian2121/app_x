import { Container, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../components/auth'

const Profile = () => {

  const {user} = useAuth();

  return (
    <Container sx={{ height: "100vh" }} >
        <Typography variant='h2' sx={{p: 2}}>
            Mi cuenta
        </Typography>

        <label htmlFor="name" className="label">Nombre</label>
        <p className="value">{ `${user.data.firstName}  ${user.data.lastName ? user.data.lastName : "" }` } </p>

        <label htmlFor="email" className="label">Email</label>
        <p className="value">{user.data.nickName}</p>

        <label htmlFor="email" className="label">Talla Uniforme</label>
        <p className="value">{`${user.data.shirtSize} ${user.data.gender ? user.data.gender : "" }`}</p>

        <label htmlFor="password" className="label">Password</label>
        <p className="value">*********</p>

    </Container>
  )
}

export default Profile