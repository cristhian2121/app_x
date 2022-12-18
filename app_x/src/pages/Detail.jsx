import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Detail() {
  // mostrar el usuario actual -> leer los parametros de la url (id)
  // traer los mensajes del usuario si tiene

  const [user, setUser] = useState([]);
  const [messages, setMessages] = useState([]);

  const  {id}  = useParams();
  const userid = id-1;
  let url = `http://localhost:3100/users/${userid}`;
  let msgUrl = `http://localhost:3100/messages/${userid}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setUser(data);
      });

      fetch(msgUrl)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMessages(data);
      });
  }, []);

  const navigate = useNavigate();

  const backToUsers = () => {
    navigate(-1);
  }

  return <>
    <h2>{`Usuario ${user.username}`} </h2>
    <p>{user.nickName ? `aka ${user.nickName}`: 'No hay un apodo configurado'}</p>
    <button onClick={backToUsers}>Atrás</button>
    <hr />
    <h2>Mensajes</h2>
    <ol>
      <li>{messages.text}</li>
      {/* { [messages].map(el => <li>{el.text} con id {el.id}</li>) } */}
    </ol>

  </>;
}
