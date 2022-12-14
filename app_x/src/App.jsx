//import { useState, useEffect } from "react";
//import { UserList } from "./components/UserList";
//import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { TitleProvider } from "./context/TitleContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider, AuthRoute } from "./components/auth";
import StudentsList from "./pages/StudentsList";

//1. hacer la llamada a la api aca en lugar de home
//2. los id en los datos retornaban el siguiente id
//3. Como se haria si existen mas mensajes o como mostrar los mensajes en pantalla

function App() {
  return (
    <>
      <TitleProvider>
      <AuthProvider>

        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/miuniforme" element={
            <AuthRoute>
            <Profile />
          </AuthRoute>
          } />
          <Route path="/estudiantes" element={
          <AuthRoute>
          <StudentsList />
          </AuthRoute>
          } />

          <Route path="/user/:id" element={<Detail />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>

        </AuthProvider>
      </TitleProvider>
    </>
  );
}

export default App;
