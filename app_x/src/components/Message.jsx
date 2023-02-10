import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'

const Message = ({ msg, userName}) => {

  const initLetterName = userName.charAt(0);

  return (
    <Box sx={{ display: "flex", width: "50%", minWidth: "400px" }}>
      <Box sx={{pt: 2}}>
        <Avatar sx={{ width: 30, height: 30 }}>{initLetterName}</Avatar>
      </Box>
      <Box sx={{p: 1}}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="subtitle2">{userName}</Typography>
          <Typography variant="overline" sx={{ fontSize: 10 }}>
            {msg.dateCreated}
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