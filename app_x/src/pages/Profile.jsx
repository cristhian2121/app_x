import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../components/auth'
import DetallesInfo from '../components/DetallesInfo';
import MessagesUI from '../components/MessagesUI';
import { TitleContext } from '../context/TitleContext';

const Profile = () => {
  console.log('Render del profile');

  const {user} = useAuth();
  const {setTitle} = React.useContext(TitleContext);
  const infoUser = user.data;
  
  React.useEffect(() => {
    //console.log("Poniendo nombre en header");
    setTitle(user.data.firstName);
  }, [user]);
  
  //console.log(user)
  let initLetterName = infoUser.firstName.charAt(0);

  return (
    <Container sx={{ width: "80%", height: "100vh", backgroundColor: "white" }}>
      <Typography variant="h4" sx={{ p: 2 }}>
        Mi cuenta
      </Typography>
      <DetallesInfo user={infoUser} />
      <MessagesUI />
    </Container>
  );
}

export default Profile