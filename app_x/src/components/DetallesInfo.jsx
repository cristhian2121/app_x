import { Box, Paper } from '@mui/material';
import React from 'react'

const DetallesInfo = ({user}) => {


  return (
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: 'center',
          flexDirection: "row",
          flexWrap: 'wrap',
          p: 2,
          minWidth: '390px',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
      
      <label htmlFor="name" className="label">
        Nombre:
      </label>
      <p className="value">
        {`${user.firstName}  ${
          user.lastName ? user.lastName : ""
        }`}{" "}
      </p>

      <label htmlFor="email" className="label">
        Email:
      </label>
      <p className="value">{user.nickName}</p>

      <label htmlFor="email" className="label">
        Talla Uniforme:
      </label>
      <p className="value">{`${user.shirtSize} - ${
        user.gender ? user.gender.toLowerCase() : ""
      }`}</p>

      <label htmlFor="deliveryDate" className="label">
        Fecha de entraga:
      </label>
      <p className="value">{`${
        user.deliveryDate ? user.deliveryDate : "Pendiente"
      }`}</p>

      <label htmlFor="password" className="label">
        Password:
      </label>
      <p className="value">*********</p>
      </Paper>
  );
}

export default DetallesInfo