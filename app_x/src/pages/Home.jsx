import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { UserList } from "../components/UserList";
import DataTable from '../components/TableMUI'
import TextField from '@mui/material/TextField';
import { useFirstRender } from "../hooks/useFirstRender";


// useRef
// 1. referencia al elemento ref
// 2. Guardar un dato

export default function Home() {
  const [data, setData] = useState([]);
  const textFieldRef = useRef(null)
  const wasFirstRenderRef = useFirstRender()

  let render = false

  const focusInput = () => {
    textFieldRef.current.focus()
    render = true;
  }

  useEffect(() => {
    fetch("http://localhost:3100/users")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setData(data);
      });

      focusInput()
      
    }, []);
    
    console.log('wasFirstRenderRef.current: ', wasFirstRenderRef);
  return (
    <div className="Main-table">
      <TextField inputRef={textFieldRef} id="filled-basic" label="Filled" variant="filled" />

      <DataTable data={data} />
      <UserList data={data} />
    </div>
  );
}
