import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';


const MessageInput = ({ enviarMensajes }) => {

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleMessage = () => {
        enviarMensajes(message);
        setMessage('');
    }

    const handleEnter = (e) => {
        if(e.key == "Enter") {
          const divMensajes = document.getElementById('msgs');
          //divMensajes.scroll({ top: 0, behavior: 'smooth' });
          divMensajes.scrollTop= 0;
          handleMessage();
        }
      }

  return (
    <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            minWidth: "390px",
          }}
        >
          {/* encapsular estado --> Done*/}
          {/* En la tabla agregar el input de biusqueda por nombre y correo */}
          {/* tener en cuenta el performance, custom hook que cuente 500 ms hasta realizar la busqueda */}
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Mensaje..."
            value={message}
            onChange={handleChange}
            onKeyDown={handleEnter}
            // TODO: evitar problema rendimiento
            // sendMessage={handleChange}
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
  )
}

export default MessageInput