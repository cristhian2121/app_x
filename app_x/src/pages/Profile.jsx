import { Avatar, Box, Container, Typography } from '@mui/material';
import React, { useRef } from 'react'
import { useAuth } from '../components/auth'
import DetallesInfo from '../components/DetallesInfo';
import MessagesUI from '../components/MessagesUI';
import { TitleContext } from '../context/TitleContext';

const Profile = () => {

  const { auth } = useAuth();
  const {setTitle} = React.useContext(TitleContext);
  const [mensajes, setMensajes] = React.useState([]);
  const [modista, setModista] = React.useState({});
  const modistasRef = useRef([]);
  
  
  //Objeto con los datos del usuario
  const infoUser = auth?.data;
  const url = `http://localhost:3100/messages/${infoUser._id}`;
  
  //Para cambiar el nombre en el header
  React.useEffect(() => {
    if(auth?.data){
      setTitle(auth.data.firstName);
    }
  }, [auth]);
  
  const getMessages = () => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMensajes(data.reverse())
      });
  }

  const enviarMensajes = (message) => {
    const url = 'http://localhost:3100/messages';
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            studentId: infoUser._id,
            //dressMakerId: '63b8eeb91b7fc428d0dc1354',
            userType: 'estudiante',
            dateCreated: Date.now(),
            message: message,
        }),
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {  
        getMessages();        
        //console.log(data);
    });
  }

  React.useEffect(() => {
    getMessages();
    printDressmaker();
  }, [])

  React.useEffect(() => {
    printDressmaker();
  }, [mensajes])
    

  const getModista = (id) => {
    fetch(`http://localhost:3100/dressmakers/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setModista(data);
    });
  }

  const printDressmaker = () => {
    mensajes.forEach( msg => {
      if(msg.userType === 'modista') {
        modistasRef.current.push(msg.dressMakerId);
      } else {
        return
      }
      getModista(modistasRef.current[0]);
    });
  }


  console.log(modista)

  return (
    <Container sx={{ width: "80%", minWidth: '450px', height: "100vh", backgroundColor: "white" }}>
      <Typography variant="h4" sx={{ pt: '80px' }}>
        Mi cuenta
      </Typography>

      <DetallesInfo user={infoUser} />

      <MessagesUI mensajes={mensajes} user={infoUser} dressMaker={modista} role='estudiante' enviarMensajes={enviarMensajes}/>
      
    </Container>
  );
}

export default Profile