import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'

const Message = ({ msg, userName, dressMaker, role}) => {

  const initLetterName = (user) => {
    return user?.charAt(0);
  }
  
  const changeDate = (fecha) => {
    const nuevaFecha = new Date(fecha);
    //const mes =  meses[nuevaFecha.getMonth()];
    //return `${mes} ${nuevaFecha.getDate()} ${nuevaFecha.getFullYear()}, ${nuevaFecha.getHours()}:${nuevaFecha.getMinutes()} `
    return `${nuevaFecha.toString().slice(4,15)}, ${nuevaFecha.toString().slice(16,21)}`;
  }

  const aligmentMessages = () => {
    if (msg.userType === role) {
      return  {display: "flex", width: "50%", minWidth: "290px", alignSelf: 'flex-end', flexDirection: 'row-reverse' }
    }else { 
      return {display: "flex", width: "50%", minWidth: "290px", alignSelf: 'flex-start', flexDirection: 'row' };
    }
  }


  return (
    <Box sx={aligmentMessages()}>
      <Box sx={{ pt: 2 }}>
        <Avatar sx={{ width: 30, height: 30, zIndex: 0 }}>{msg.userType === 'estudiante' ? initLetterName(userName) : initLetterName(dressMaker?.firstName) }</Avatar>
      </Box>
      <Box sx={{p: 1}}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

          <Typography variant="subtitle2">{msg.userType === 'estudiante' ? userName : dressMaker?.firstName}</Typography>

          <Typography variant="caption" sx={{ fontSize: 10 }}>
            {changeDate(msg.dateCreated)}
          </Typography>
        </Box>
        <Typography variant="body2" >
          {msg.message}
        </Typography>
      </Box>
    </Box>
  );
}

export default Message