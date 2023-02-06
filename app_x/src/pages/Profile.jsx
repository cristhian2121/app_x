import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../components/auth'
import DetallesInfo from '../components/DetallesInfo';
import MessagesUI from '../components/MessagesUI';
import { TitleContext } from '../context/TitleContext';

const Profile = () => {
  console.log('Render del profile');

  const {user} = useAuth();
  console.log(user, 'Profile');
  const {setTitle} = React.useContext(TitleContext);
  const infoUser = user.data;
  
  React.useEffect(() => {
    setTitle(user.data.firstName);
  }, [user]);
  
  //console.log(user)
  let initLetterName = infoUser.firstName.charAt(0);

  return (
    <Container sx={{ width: "80%", minWidth: '450px', height: "100vh", backgroundColor: "white" }}>
      <Typography variant="h4" sx={{ pt: '80px' }}>
        Mi cuenta
      </Typography>
      <DetallesInfo user={infoUser} />
      <MessagesUI />
    </Container>
  );
}

export default Profile