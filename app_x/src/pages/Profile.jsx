import { Box, Container, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../components/auth'
import { TitleContext } from '../context/TitleContext';

const Profile = () => {

  const {user} = useAuth();
  const {setTitle} = React.useContext(TitleContext);
  setTitle(user.data.firstName);

  return (
    <Container sx={{ height: "100vh" }} >

        <Typography variant='h4' sx={{p: 2}}>
            Mi cuenta
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>


        <label htmlFor="name" className="label">Nombre:</label>
        <p className="value">{ `${user.data.firstName}  ${user.data.lastName ? user.data.lastName : "" }` } </p>

        <label htmlFor="email" className="label">Email:</label>
        <p className="value">{user.data.nickName}</p>

        <label htmlFor="email" className="label">Talla Uniforme:</label>
        <p className="value">{`${user.data.shirtSize} - ${user.data.gender ?  user.data.gender : "" }`}</p>

        <label htmlFor="deliveryDate" className="label">Talla Uniforme:</label>
        <p className="value">{`${user.data.deliveryDate ? user.data.deliveryDate : "Pendiente" }`}</p>

        <label htmlFor="password" className="label">Password:</label>
        <p className="value">*********</p>

        </Box>
    </Container>
  )
}

export default Profile