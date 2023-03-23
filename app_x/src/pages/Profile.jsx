import { Container, Typography } from '@mui/material';

import React, {useState , useEffect, useContext} from 'react'
import { useMutation, useQuery, useQueryClient, useQueries } from 'react-query';

import { useAuth } from '../components/auth'
import DetallesInfo from '../components/DetallesInfo';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import MessagesUI from '../components/MessagesUI';

import { TitleContext } from '../context/TitleContext';

import { getStudentMessages, sendMessages, getDressMakerInfo } from '../uniformsApi/uniformsAPI';
//fetchers

const Profile = () => {
  
  const { auth } = useAuth();
  const {setTitle} = useContext(TitleContext);
  
  //Objeto con los datos del usuario
  const infoUser = auth?.data;

  const {isLoading, data: studentMessages, isError, error} = useQuery({
    queryKey: ['StudentMessages', infoUser._id],
    queryFn: () => getStudentMessages(infoUser._id),
    select: (studentMessages) => studentMessages.slice().reverse(),
  });

    const dressMakersIDs = studentMessages
    ?.filter((msj) => msj.userType === "modista")
    .map((item) => item.dressMakerId);

    const unique = dressMakersIDs?.filter(
      (item, i, ar) => ar.indexOf(item) === i
      );

    const queries = unique?.map( id => ({
            queryKey: ["DressMakerInfo", id],
            queryFn: () => getDressMakerInfo(id),
          })) || [];
        
    const modistasInfo = useQueries(queries);
    const modistas = modistasInfo.map(query => query.data);

    const queryClient = useQueryClient();
  const sendMessage = useMutation({
    mutationFn: (message) => sendMessages(infoUser._id, '', 'estudiante', message),
    onSuccess: () => {
      queryClient.invalidateQueries('StudentMessages');
    }
  })

  //Para cambiar el nombre en el header
  useEffect(() => {
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
  //


    if(isLoading) return <Loading />
    else if (isError) return <ErrorMessage errorMessage={error.message}/>

    const modistasListos = modistasInfo.some(query => query.isLoading);

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

      {!modistasListos &&
        <MessagesUI
          mensajes={studentMessages}
          user={infoUser}
          dressMaker={modistas}
          role="estudiante"
          enviarMensajes={sendMessage}
        />
      }

    </Container>
  );
}

export default Profile