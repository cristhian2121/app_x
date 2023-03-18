import { Paper, styled } from "@mui/material";
import Message from './Message';
import MessageInput from './MessageInput';

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

  //throw Error('Opps!')
  const userName = user?.firstName;

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
            mensajes.map( msg => (
              <Message msg={msg} userName={userName} key={msg._id} dressMaker={dressMaker} role={role} />
            ))

            // role == 'estudiante' ? 
            // mensajes.map( msg => {
            //   const dressmakerInfo = dressMaker.filter( dm => dm._id == msg.dressMakerId)
            //   return <Message msg={msg} userName={userName} key={msg._id} dressMaker={dressmakerInfo[0]} role={role} />
            // })
            // :
            // mensajes.map( msg => (
            //   <Message msg={msg} userName={userName} key={msg._id} dressMaker={dressMaker} role={role} />
            // ))
            }

          </BootstrapPaper>
          <MessageInput enviarMensajes={enviarMensajes} />
      </Paper>
    </>
  );
}