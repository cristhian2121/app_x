import { Box, CircularProgress, Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../components/auth';
import DataTable from '../components/TableMUI';
import { TitleContext } from '../context/TitleContext';
import {useQuery} from 'react-query';
import { getStudents } from '../uniformsApi/uniformsAPI'
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const StudentsList = () => {

  const {isLoading, data: studentsList, isError, error} = useQuery({
    queryKey: ['students'],
    queryFn: getStudents
  })

  const [data, setData] = useState([]);
  const { auth } = useAuth();
  const { setTitle } = useContext(TitleContext);

  // const getStudents = () => {
  //   fetch("http://localhost:3100/students")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //console.log(data);
  //       setData(data);
  //     });
  // };

  useEffect(() => {
    //getStudents();
    //console.log(auth)
    setTitle(auth?.data.firstName);
  }, []);

  if (isLoading) return <Loading/>
    else if (isError) return <ErrorMessage errorMessage={error.message}/>

  return (
    <Container
      sx={{
        backgroundColor: "white",
        height: "100%",
        minHeight: "100vh",
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ p: 2 }} variant="h4">
        Estudiantes
      </Typography>
      <DataTable data={studentsList} />
    </Container>
  );
}

export default StudentsList