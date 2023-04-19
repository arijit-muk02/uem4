import React from 'react'
import demoAdmit from "../assets/demo2.png"
import { Link } from 'react-router-dom';
export default function Admit() {
    const handlePrint = () => {
        window.print();
      };

  return (
    <>
    <div className="container">
      <div className="text-center mt-5">
        <img width={"70%"} src={demoAdmit} alt="" />
      </div>
    </div>
    <div className="text-center  my-3">
      <Link to="/about" className="btn btn-primary ">Back</Link> 
      <Link to="" className="btn btn-primary mx-3" onClick={handlePrint}>Print</Link>
    </div>
  </>
  )
}
