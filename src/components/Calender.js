import React from "react";
import myImage2 from '../assets/routine2023.jpg';
import '../assets/calender.css'
import { Link } from 'react-router-dom'
export default function Calender() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <div className="text-center container mt-5">
        <img style={{border:"1px solid black"}} src={myImage2} alt="" className="img-fluid calender_img" />
      </div>
      <div className="text-center">
      <Link to="/about" className="mt-3 btn btn-primary">Back</Link>
      <Link to="" className="btn btn-primary mt-3 mx-3" onClick={handlePrint}>Print</Link>
      </div>
    </div>
  );
}
