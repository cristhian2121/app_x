import { Container, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetalleEstudiante = () => {
    //const { id } = useParams();
     const location = useLocation()
     console.log(location)
  return (
    <Container sx={{backgroundColor: 'white', height: '95vh'}}>
        <Typography variant='h4'>Hi</Typography>
        <Typography variant='h6'>{state?.data.firstName}</Typography>
    </Container>
  )
}

export default DetalleEstudiante