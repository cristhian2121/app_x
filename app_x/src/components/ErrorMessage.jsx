import { Container, IconButton, Typography } from '@mui/material';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import React from 'react'

const ErrorMessage = ( {errorMessage} ) => {
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
        <Typography>{errorMessage}</Typography>
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