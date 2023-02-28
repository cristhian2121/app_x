import { Container, Typography } from '@mui/material';
import React from 'react';
import './Prueba2.css';
import Message from './Message';

const mens = [{"_id":"63e1cdad0cc68173f648766a","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-07T04:03:57.042Z","message":"Hola mijito","__v":0},{"_id":"63e1cfe00cc68173f6487679","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-07T04:13:20.508Z","message":"Hola de nuevo","__v":0},{"_id":"63e1d23c0cc68173f6487680","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-07T04:23:24.945Z","message":"Hola Vane","__v":0},{"_id":"63e1d3ec0cc68173f6487694","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-07T04:30:36.229Z","message":"Adriana","__v":0},{"_id":"63e32e3c32837c2b7e0d4f1d","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-08T05:08:12.353Z","message":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quisquam nemo alias nulla omnis? Culpa tempora doloremque repellendus qui, facere illo recusandae necessitatibus iure omnis commodi facilis labore, tenetur voluptas.","__v":0},{"_id":"63e64b7dd6829e8fb9e944ee","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-10T13:49:49.536Z","message":"Hola hola ","__v":0},{"_id":"63e64b8dd6829e8fb9e944f1","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-10T13:50:05.135Z","message":"Hola amigos de youtube","__v":0},{"_id":"63e662ebd798bcea03100918","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-10T15:29:47.259Z","message":"Como estas?","__v":0},{"_id":"63e66327d798bcea0310091d","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-10T15:30:47.675Z","message":"Como estas ve? ","__v":0},{"_id":"63e696ea3353c5fa50a9cef8","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"estudiante","dateCreated":"2023-02-10T19:11:38.732Z","message":"Hola","__v":0},{"_id":"63e69a4c3353c5fa50a9cf08","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"modista","dateCreated":"2023-02-10T19:26:04.388Z","message":"Hola de nuevo","__v":0},{"_id":"63e69aa33353c5fa50a9cf0d","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"modista","dateCreated":"2023-02-10T19:27:31.137Z","message":"Hola","__v":0},{"_id":"63e9b4546e75405c040cdc34","studentId":"63b8ed901b7fc428d0dc0f64","dressMakerId":"63b8eeb91b7fc428d0dc1354","userType":"modista","dateCreated":"2023-02-13T03:53:56.293Z","message":"Hola again ","__v":0},{"_id":"63eb1280a12dd7e39f86398a","studentId":"63b8ed901b7fc428d0dc0f64","userType":"estudiante","dateCreated":"2023-02-14T04:48:00.216Z","message":"Hi","__v":0},{"_id":"63f8503c8a25f703243eb38a","studentId":"63b8ed901b7fc428d0dc0f64","userType":"estudiante","dateCreated":"2023-02-24T05:50:52.114Z","message":"Otro mensaje","__v":0},{"_id":"63f850448a25f703243eb390","studentId":"63b8ed901b7fc428d0dc0f64","userType":"estudiante","dateCreated":"2023-02-24T05:51:00.136Z","message":"mas mensajes","__v":0},{"_id":"63f850988a25f703243eb396","studentId":"63b8ed901b7fc428d0dc0f64","userType":"estudiante","dateCreated":"2023-02-24T05:52:24.643Z","message":"hola ","__v":0},{"_id":"63f8516c8a25f703243eb39c","studentId":"63b8ed901b7fc428d0dc0f64","userType":"estudiante","dateCreated":"2023-02-24T05:55:56.883Z","message":"Mas pruebas","__v":0},{"_id":"63f8518f8a25f703243eb3a2","studentId":"63b8ed901b7fc428d0dc0f64","userType":"estudiante","dateCreated":"2023-02-24T05:56:31.937Z","message":"Mas y mas","__v":0}];


const Prueba2 = () => {
  return (
     <div className='divPrincipal'>
        {/* <Container  sx={{ width: "80%", minWidth: '390px', height: "100%", backgroundColor: "white" }} > */}

        <Typography>Hola Mundo</Typography>
        <Typography>Hola Mundo</Typography>
        <Typography>Hola Mundo</Typography>
        
        <div className='div1'>
            <div className='div2'>
            {
            mens.map( (msg) => (
              <Message msg={msg} userName={'Cesar'} key={msg._id} dressMaker={'Maria'} role={'estudiante'} />
            ))
            }
            </div>
            <div className='div3'>

            </div>
        </div>
        {/* </Container> */}
     </div>
  )
}

export default Prueba2