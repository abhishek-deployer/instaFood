import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import LandingPage from './components/landingPage/landingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
          
         
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
