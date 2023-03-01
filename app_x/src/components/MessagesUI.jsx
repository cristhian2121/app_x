import {useState, useEffect} from 'react';
import { Container, Divider, IconButton, InputBase, Paper, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';

const BootstrapPaper = styled(Paper)(
  ({ theme }) => {
  return {    
    "&": {      
      height: "89%",
      width: '100%',
      display: "flex",
      flexDirection: 'column-reverse',
      justifyContent: "flex-start",
      alignContent: 'center',
      minWidth: "390px",
      overflow: "scroll",
    },
    "& .MuiBox-root": {
      paddingLeft: 2,
      paddingRight: 2,
    }
  }
})

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

  const handleEnter = (e) => {
    if(e.key == "Enter") {
      const divMensajes = document.getElementById('msgs');
      //divMensajes.scroll({ top: 0, behavior: 'smooth' });
      divMensajes.scrollTop= 0;
      handleMessage();
    }
  }
  console.log('dressMaker: ', dressMaker);

  return (
    <>
      <Paper
        elevation={3}
        square
        sx={{
          p: 2,
          // height: '100%',
          height: 'calc(100% - 64px)',
          minWidth: "390px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "scroll",
        }}
      >

          <BootstrapPaper
          elevation={0}
          square
          id='msgs'
          >
            { 
            role == 'estudiante' ? 
            mensajes.map( msg => {
              const dressmakerInfo = dressMaker.filter( dm => dm._id == msg.dressMakerId)
              return <Message msg={msg} userName={userName} key={msg._id} dressMaker={dressmakerInfo[0]} role={role} />
            })
            :
            mensajes.map( msg => (
              <Message msg={msg} userName={userName} key={msg._id} dressMaker={dressMaker} role={role} />
            ))
            }

          </BootstrapPaper>

        <Paper
          //component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            minWidth: "390px",
          }}
        >
          {/* encapsular estado */}
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
      </Paper>
    </>
  );
}