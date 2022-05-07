import React from "react";
import  EditUser  from "./components/EditUser";
import  HomePage  from "./components/HomePage";
import {Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
      </Routes>
    </>
  )
}
export default App
