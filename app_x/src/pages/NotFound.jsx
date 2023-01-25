import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react';

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        bgcolor: "white",
        height: "100vh",
      }}
    >
      <Typography variant="h1">Pagina no encontrada</Typography>
    </Container>
  );
}

export default NotFound