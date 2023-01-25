import { Container, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetalleEstudiante = () => {
    //const { id } = useParams();
<<<<<<< HEAD
     const location = useLocation()
     // State -> student
     console.log(location)

     // getStudent -> fetch -> setState

     //useEffect - first render -> call getStudent

=======
    const location = useLocation();
    //const myData = location.state.data;

     console.log( params)
>>>>>>> c12b1c5 (Not found component)
  return (
    <Container sx={{backgroundColor: 'white', height: '95vh'}}>
        <Typography variant='h4'>Hi</Typography>
        <Typography variant='h6'>{state?.data.firstName}</Typography>
    </Container>
  )
}

export default DetalleEstudiante