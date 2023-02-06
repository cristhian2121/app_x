import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Divider, IconButton, InputBase, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';



export default function MessagesUI() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        elevation={3}
        square
        sx={{
          p: 2,
          height: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Message />

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Mensaje..." />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: "10px" }} aria-label="send">
            <SendIcon />
          </IconButton>
        </Paper>
      </Paper>
    </React.Fragment>
  );
}