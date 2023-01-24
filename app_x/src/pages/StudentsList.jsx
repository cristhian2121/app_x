import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataTable from '../components/TableMUI';

const StudentsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3100/students")
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            setData(data);
          });

        }, []);

  return (
    <Container sx={{backgroundColor: 'white', height: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{p: 2}} variant='h4'>Estudiantes</Typography>
        <DataTable data={data} />
    </Container>
  )
}

export default StudentsList