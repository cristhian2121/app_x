import { Container, Typography } from '@mui/material';
import React, { useRef } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAuth } from '../components/auth'
import DetallesInfo from '../components/DetallesInfo';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import MessagesUI from '../components/MessagesUI';
import { TitleContext } from '../context/TitleContext';
import { getStudentMessages } from '../uniformsApi/uniformsAPI';

const Profile = () => {

  
  const { auth } = useAuth();
  const {setTitle} = React.useContext(TitleContext);
  const [mensajes, setMensajes] = React.useState([]);
  const [modista, setModista] = React.useState({});
  
  //Objeto con los datos del usuario
  const infoUser = auth?.data;
  //const url = `http://localhost:3100/messages/${infoUser._id}`;
  
  const {isLoading, data: studentMessages, isError, error} = useQuery({
    queryKey: ['StudentMessages', infoUser._id],
    queryFn: () => getStudentMessages(infoUser._id),
    select: (studentMessages) => studentMessages.reverse(),
  });

  const queryClient = useQueryClient();
  
  const sendMessage = useMutation({
    mutationFn: (message) => sendMessages(infoUser._id, _, 'estudiante', message),
    onSuccess: () => {
      queryClient.invalidateQueries('StudentMessages');
    }
  })

  //Para cambiar el nombre en el header
  React.useEffect(() => {
    if(auth?.data){
      setTitle(auth.data.firstName);
    }
  }, [auth]);
  
  // const getMessages = () => {
  //     fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMensajes(data.reverse())
  //     });
  // }


  // const enviarMensajes = (message) => {
  //   const url = 'http://localhost:3100/messages';
  //   const options = {
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       method: 'POST',
  //       body: JSON.stringify({
  //           studentId: infoUser._id,
  //           //dressMakerId: '63b8eeb91b7fc428d0dc1354',
  //           userType: 'estudiante',
  //           dateCreated: Date.now(),
  //           message: message,
  //       }),
  //   }

  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((data) => {  
  //       getMessages();
  //       //console.log(data);
  //   });
  // }

  // React.useEffect(() => {
  //   getMessages();
  //   printDressmaker();
  // }, [])

  React.useEffect(() => {
    printDressmaker();
  }, [mensajes])

  const printDressmaker = async () => {

    try {
      const dressMakersIDs = studentMessages
      .filter((msj) => msj?.userType === "modista")
      .map((item) => item?.dressMakerId);

      
      const unique = dressMakersIDs.filter(
        (item, i, ar) => ar.indexOf(item) === i
        );
        //const unique = [... new Set(dressMakersIDs)]
        console.warn('AAAAAAAAAA',unique);
        
        let dressMakerRequests = unique.map((id) => {
          return fetch(`http://localhost:3100/dressmakers/${id}`).then((res) =>
          res.json()
          );
        });
        //try catch, error boundary. por dentro de los providers. 
        const responses = await Promise.all(dressMakerRequests);
        setModista(responses);

      } catch (error) {
        console.log(error);
      }
  }


  if (isLoading) return <Loading/>
    else if (isError) return <ErrorMessage errorMessage={error.message}/>

  return (
    <Container
      sx={{
        width: "80%",
        minWidth: "390px",
        height: "80vh",
        backgroundColor: "white",
      }}
      disableGutters
    >
      <Typography variant="h4" sx={{ ml: 2, pt: "80px" }}>
        Mi cuenta
      </Typography>

      <DetallesInfo user={infoUser} />

      <MessagesUI
        mensajes={studentMessages}
        user={infoUser}
        dressMaker={modista}
        role="estudiante"
        enviarMensajes={enviarMensajes}
      />
    </Container>
  );
}

export default Profile