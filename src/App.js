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
        <Route  exact path="/"  element={<Login/>} />
        <Route  exact path="/about"  element={<About/>} />
        <Route  exact path="/feedback"  element={<Feedback/>} />
        <Route  exact path="/calender"  element={<Calender/>} />
        <Route  exact path="/fees"  element={<Fees/>} />
        <Route  exact path="/attendance"  element={<Attendance/>} />
        <Route  exact path="/forget"  element={<Forget/>} />
        <Route  exact path="/result"  element={<Result/>} />
        <Route  exact path="/demoResult"  element={<DemoResult/>} />
        <Route  exact path="/admit"  element={<Admit/>} />
        <Route  exact path="/info"  element={<Info/>} />
      </Routes>
    </Router>
  
    
  
  );
}

export default App;
