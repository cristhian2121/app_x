import { useState, useEffect } from "react";
import { UserList } from "./components/UserList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
