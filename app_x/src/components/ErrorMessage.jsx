import { Container, IconButton } from '@mui/material';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import React from 'react'

const ErrorMessage = () => {
  return (
    <Container
    sx={{
        width: "80%",
        minWidth: "390px",
        height: "100vh",
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      disableGutters
    >
        <h1>Something went wrong. </h1>
        <IconButton
        color="primary"
        onClick={ () => window.location.reload() }
        >
            <ReplayRoundedIcon />
        </IconButton>
    </Container>
  )
}

export default ErrorMessage