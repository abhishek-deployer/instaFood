import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import LandingPage from './components/landingPage/landingPage';
import Profile from './components/profile/profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<LandingPage />}/>
        <Route path="/profile" element={<Profile/>}/>
          
         
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
