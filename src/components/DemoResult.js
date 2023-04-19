import React from "react";
import demoCard from "../assets/resultcard.png";
import { Link } from "react-router-dom";
export default function DemoResult() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <img width={"50%"} src={demoCard} alt="" />
        </div>
      </div>
      <div className="text-center  my-3">
        <Link to="/about" className="btn btn-primary ">Back</Link> 
        <Link to="" className="btn btn-primary mx-3" onClick={handlePrint}>Print</Link>
      </div>
    </>
  );
}
