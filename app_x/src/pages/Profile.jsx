import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../components/auth'
import MessagesUI from '../components/MessagesUI';
import { TitleContext } from '../context/TitleContext';

const Profile = () => {

  console.log('Render del profile');
  const {user} = useAuth();
  const {setTitle} = React.useContext(TitleContext);
  
  React.useEffect(() => {
    console.log("Poniendo nombre en header");
    setTitle(user.data.firstName);
  }, [user]);
  
  console.log(user)
  let initLetterName = user.data.firstName.charAt(0);

  return (
    <Container sx={{ width: '80%', height: "100vh", backgroundColor: 'white' }} >

        <Typography variant='h4' sx={{p: 2}}>
            Mi cuenta
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', height: 80}}>


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

        {/* <Avatar>{initLetterName}</Avatar> */}

        </Box>
        <MessagesUI />
    </Container>
  )
}

export default Profile