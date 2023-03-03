import { Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../components/auth';
import DataTable from '../components/TableMUI';
import { TitleContext } from '../context/TitleContext';

const StudentsList = () => {
    const [data, setData] = useState([]);
    const {auth} = useAuth();
    const {setTitle} = useContext(TitleContext);
  
    const getStudents = () => {
      fetch("http://localhost:3100/students")
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            setData(data);
          });
    }
        useEffect(() => {
          getStudents();
          //console.log(auth)
          setTitle(auth?.data.firstName);
        }, []);

  return (
    <Container sx={{backgroundColor: 'white', height: '100vh', paddingTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{p: 2}} variant='h4'>Estudiantes</Typography>
        <DataTable data={data} />
    </Container>
  )
}

export default StudentsList