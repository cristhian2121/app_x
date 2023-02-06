import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DetallesInfo from './DetallesInfo';
import MessagesUI from './MessagesUI';

const DetalleEstudiante = () => {

  const [student, setStudent] = useState({});

  //Para enviar parametros desde TableMUI
  //const location = useLocation();
  //console.log(location, "hi this is me")

  // State -> student
  const { id } = useParams();
  const url = `http://localhost:3100/students/${id}`;

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
      //useEffect - first render -> call getStudent
  useEffect(() => {
    getStudent();
  }, []);

  return (
    <Container sx={{backgroundColor: 'white', height: '100vh', width: '90%', minWidth: '450px'}}>
        <Typography sx={{pt: '80px'}} variant='h4'>{student.firstName}</Typography>
        <DetallesInfo user={student} />
        <MessagesUI />
    </Container>
  )
}

export default DetalleEstudiante