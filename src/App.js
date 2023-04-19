import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Header from './components/Header';
import Feedback from './components/Feedback';
import Calender from './components/Calender';
import Fees from './components/Fees';
import Attendance from './components/Attendance';
import Forget from './components/Forget';
import Result from './components/Result';
import DemoResult from './components/DemoResult';
import Admit from './components/Admit';
import Info from './components/Info';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path="/"  element={<Login/>} />
        <Route  path="/about"  element={<About/>} />
        <Route  path="/feedback"  element={<Feedback/>} />
        <Route  path="/calender"  element={<Calender/>} />
        <Route  path="/fees"  element={<Fees/>} />
        <Route  path="/attendance"  element={<Attendance/>} />
        <Route  path="/forget"  element={<Forget/>} />
        <Route  path="/result"  element={<Result/>} />
        <Route  path="/demoResult"  element={<DemoResult/>} />
        <Route  path="/admit"  element={<Admit/>} />
        <Route  path="/info"  element={<Info/>} />
      </Routes>
    </Router>
  
    
  
  );
}

export default App;
