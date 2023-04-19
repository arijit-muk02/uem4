import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../assets/about.css";
// @ts-ignore
import myImage from '../assets/jerry.jpg';

export default function About() {
  useEffect(() => {
    startTime();
  }, []);

  function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + " " + ap;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',      'November', 'December'    ];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-5">
          <h6>Student of CST. Sec: A. Class Roll : 34</h6>
          <p>
            Given below is the time-table for present day. Check the detailed
            routine shared in telegram for faculty details and venue .
          </p>
          <table className="table-bordered border-primary ">
            <tr className="table-primary text-center">
              <td colSpan={2}>Monday</td>
            </tr>
            <tr className="off">
              <td>9.30 a.m - 10.25 a.m :</td>
              <td>SDP-VI</td>
            </tr>
            <tr className="off">
              <td>10.30 a.m - 11.30 a.m :</td>
              <td>SDP-VI</td>
            </tr>
            <tr className="off">
              <td>11.30 a.m - 12.25 a.m :</td>
              <td>Organisational Behaviour</td>
            </tr>
            <tr className="table-primary text-center">
              <td colSpan={2}>Break</td>
            </tr>
            <tr className="off">
              <td>01.20 p.m - 02.15 p.m :</td>
              <td>Computer Networks</td>
            </tr>
            <tr className="off">
              <td>11.30 a.m - 12.25 a.m :</td>
              <td>Organisational Behaviour</td>
            </tr>
            <tr className="off">
              <td>11.30 a.m - 12.25 a.m :</td>
              <td>Computer Networks</td>
            </tr>
          </table>
        </div>

        <div className="col-lg-7 profile">
          <h3>
            Welcome, <span>Jerry</span>
          </h3>
          <p>Your Computer Number Is 298.178.20.01</p>
          <div className="row">
            <div className="col-lg-3">
              <img src={myImage} className="img-fluid my-4" alt="User_picture" />
              <br />
              <button className="update update2">Update Photo</button>
              <div className="dropdown show  drop2">
  <a className="update dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <Link className="dropdown-item" to="/result">Unit Test Details</Link>
      <Link className="dropdown-item" to="/attendance">Attendance</Link>
      <Link className="dropdown-item" to="/calender">Organisational Calender</Link>
      <Link className="dropdown-item" to="/info">My Information</Link>
      <Link className="dropdown-item" to="/fees">Fees</Link>
      <Link className="dropdown-item" to="/feedback">Sem Feedback</Link>
      <Link className="dropdown-item" to="/admit">Admit Card</Link>
      <Link className="dropdown-item" to="/forget">Forget Password</Link>
      {/* <button className="butn">Exam Form</button> */}
      <Link className="dropdown-item" to="/">LogOut</Link>
      x
  </div>
</div>
            </div>

            <div className="col-lg-9">
  <div className="row row2 flex-column flex-md-row">
    <div className="col-lg-6 col-sm-6 col-12">
      <Link to="/result"><button className="butn">Unit Test Details</button></Link>
      <Link to="/attendance"><button className="butn">Attendance</button></Link>
      <Link to="/calender"><button className="butn">Organisational Calendar</button></Link>
      <Link to="/info"><button className="butn">My Information</button></Link>
      <Link to="/fees"><button className="butn">Fees</button></Link>
    </div>
    <div className="col-lg-6 col-sm-6 col-12">
      <Link to="/feedback"><button className="butn">Sem Feedback</button></Link>
      <Link to="/admit"><button className="butn">Admit card</button></Link>
      <button className="butn">Exam Form</button>
      <Link to="/forget"><button className="butn">Forget Password?</button></Link>
      <Link to="/"><button className="butn">LogOut</button></Link>
    </div>
  </div>
</div>

      </div>
    </div>
    </div>

    <div id="clockdate ok text-center" className="my-3 text-center mt-5" >
		<div className="clockdate-wrapper">
			<div id="clock"></div>
			<div id="date"></div>
		</div>
	</div>
    </div>

    
  );
}


