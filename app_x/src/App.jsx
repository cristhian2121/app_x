import { useState, useEffect } from "react";
import { UserList } from "./components/UserList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

//1. hacer la llamada a la api aca en lugar de home
//2. los id en los datos retornaban el siguiente id
//3. Como se haria si existen mas mensajes o como mostrar los mensajes en pantalla 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Detail />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
