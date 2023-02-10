import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';



export default function MessagesUI({ llamadoMensajes, user }) {

  const [message, setMessage] = React.useState('');
  const [data, setData] = React.useState([]);
  const url = `http://localhost:3100/messages/${user._id}`;

  const userName = user.firstName;

  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  const handleMessage = () => {
    llamadoMensajes(message);
    setMessage('');
  }

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
    }, []);

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
          overflow: "scroll",
        }}
      >

        <Paper
        elevation={0}
        square
        sx={{
          // p: 2,
          height: "89%",
          width: '100%',
          display: "flex",
          flexDirection: 'column',
          justifyContent: "space-between",
          overflow: "scroll",
        }}
        >
        {
        data.map( (msg) => (
          <Message msg={msg} userName={userName} key={msg._id} />
        ))
        }
        </Paper>

        <Paper
          component="form"
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
    </React.Fragment>
  );
}