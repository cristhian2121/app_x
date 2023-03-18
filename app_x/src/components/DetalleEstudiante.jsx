import { Box, Container, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetallesInfo from './DetallesInfo';
import MessagesUI from './MessagesUI';
import { useAuth } from '../components/auth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getStudentInfo, getDressMakerMessages, sendMessages } from '../uniformsApi/uniformsAPI';
import Loading from './Loading';


const DetalleEstudiante = () => {

  //const [student, setStudent] = useState({});
  //const [mensaje, setMensaje] = useState([]);
  
  const {auth} = useAuth();
  const navigate = useNavigate();

  // State -> student
  const { id } = useParams();

  const {isLoading, data: studentInfo, isError, error} = useQuery({
    queryKey: ['studentInfo', id],
    queryFn: () => getStudentInfo(id),
  });
  const { data: dressMakerMessages,} = useQuery({
    queryKey: ['dressMakerMessages', id, auth.data._id],
    queryFn: () => getDressMakerMessages(id, auth.data._id),
  });

  const queryClient = useQueryClient();
  const sendMessage = useMutation({
    mutationFn: (message) => sendMessages(id, auth.data._id, 'modista', message),
    onSuccess: () => {
      queryClient.invalidateQueries('dressMakerMessages');
    }
  })

  //const url = `http://localhost:3100/students/${id}`;
  //const urlMessage = `http://localhost:3100/messages/${id}/${auth.data._id}`;

//   // getStudent -> fetch -> setState
//   const getStudent = () => {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           //console.log(data);
//           if (data) {
//             setStudent(data);
//           } else {
//             console.log("false");
//           }
//         });
// }

  // const getMessages = () => {
  //   fetch(urlMessage)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setMensaje(data.reverse());
  //   });
  // }

  // const enviarMensajes = (message) => {
  //   const url = 'http://localhost:3100/messages';
  //   const options = {
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       method: 'POST',
  //       body: JSON.stringify({
  //           studentId: id,
  //           dressMakerId: auth.data._id,
  //           userType: 'modista',
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

      //useEffect - first render -> call getStudent
  // useEffect(() => {
  //   //getStudent(); before react-query
  //   //getMessages();
  // }, []);

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <Container
      sx={{
        backgroundColor: "white",
        height: "calc(100vh - 65px)",
        paddingTop: 10,
        width: "90%",
        minWidth: "390px",
      }}
      disableGutters
    >
      <Box sx={{ pl: 1, display: "flex" }}>
        <IconButton color="primary" onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ display: "inline-block" }} variant="h4">
          {studentInfo?.firstName}
        </Typography>
      </Box>

      {studentInfo && <DetallesInfo user={studentInfo} />}

      {dressMakerMessages && (
        <MessagesUI
          mensajes={dressMakerMessages}
          user={studentInfo}
          dressMaker={auth.data}
          role="modista"
          enviarMensajes={sendMessage}
        />
      )}

    </Container>
  );
}

export default DetalleEstudiante