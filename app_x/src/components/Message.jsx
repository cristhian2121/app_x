import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'

const Message = () => {
  return (
    <Box sx={{display: 'flex', width: '50%', minWidth: '400px'}}>
        <Avatar sx={{mt: 1}}>C</Avatar>
        <div>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, p: 1}}>
                <Typography variant='h6'>Cesar Fontalvo</Typography>
                <Typography variant='overline' sx={{fontSize: 10}}>Nov 17, 4:23 PM</Typography>
            </Box>
            <Typography variant='body2' sx={{p:1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore velit ipsa ad, nisi illo, consectetur ab assumenda impedit asperiores dolorem modi molestias porro beatae ullam exercitationem, corporis eaque placeat.</Typography>
        </div>

    </Box>
  )
}

export default Message