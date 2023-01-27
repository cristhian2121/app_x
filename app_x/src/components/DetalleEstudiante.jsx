import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetallesInfo from './DetallesInfo';

const DetalleEstudiante = () => {

  const [student, setStudent] = useState({});

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
    <Container sx={{backgroundColor: 'white', height: '100vh'}}>
        <Typography variant='h4'>{student.firstName}</Typography>
        <DetallesInfo user={student} />
    </Container>
  )
}

export default DetalleEstudiante