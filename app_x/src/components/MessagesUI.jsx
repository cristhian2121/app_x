import {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';



export default function MessagesUI({ enviarMensajes, user, mensajes, dressMaker, role }) {

  const [message, setMessage] = useState('');

  const userName = user.firstName;

  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  const handleMessage = () => {
    enviarMensajes(message);
    setMessage('');
  }


  return (
    <>
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
          overflow: "scroll",
        }}
      >

        <Paper
        elevation={0}
        square
        sx={{
          pr: 2,
          pl: 2,
          height: "89%",
          width: '100%',
          display: "flex",
          flexDirection: 'column-reverse',
          justifyContent: "space-between",
          alignContent: 'center',
          overflow: "scroll",
        }}
        >
        {
        mensajes.map( (msg) => (
          <Message msg={msg} userName={userName} key={msg._id} dressMaker={dressMaker} role={role} />
        ))
        }
        </Paper>

        <Paper
          //component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            //position: "sticky",
            //bottom: "15px"
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Mensaje..."
            value={message}
            onChange={handleChange}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="send"
            onClick={handleMessage}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Paper>
    </>
  );
}