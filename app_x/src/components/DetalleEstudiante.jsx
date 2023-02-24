import { Container, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetallesInfo from './DetallesInfo';
import MessagesUI from './MessagesUI';
import { useAuth } from '../components/auth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DetalleEstudiante = () => {

  const [student, setStudent] = useState({});
  const [mensaje, setMensaje] = useState([]);
  const {auth} = useAuth();
  const navigate = useNavigate();

  // State -> student
  const { id } = useParams();
  const url = `http://localhost:3100/students/${id}`;
  const urlMessage = `http://localhost:3100/messages/${id}/${auth.data._id}`;

  // getStudent -> fetch -> setState
  const getStudent = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setStudent(data);
          } else {
            console.log("false");
          }
        });
}

  const getMessages = () => {
    fetch(urlMessage)
    .then((res) => res.json())
    .then((data) => {
      setMensaje(data.reverse());
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
            studentId: id,
            dressMakerId: auth.data._id,
            userType: 'modista',
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

      //useEffect - first render -> call getStudent
  useEffect(() => {
    getStudent();
    getMessages();
  }, []);

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <Container sx={{backgroundColor: 'white', height: '100vh', width: '90%', minWidth: '450px'}}>
        <IconButton
        onClick={handleBack}
        >
          <ArrowBackIcon/>
        </IconButton>
        <Typography sx={{display: 'inline-block', pt: '80px'}} variant='h4'>{student.firstName}</Typography>
        <DetallesInfo user={student} />
        <MessagesUI mensajes={mensaje} user={student} dressMaker={auth.data} role='modista' enviarMensajes={enviarMensajes} />
    </Container>
  )
}

export default DetalleEstudiante