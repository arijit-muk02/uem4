import React from "react";
import demoCard from "../assets/resultcard.png";

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
        <a href="/about" className="btn btn-primary ">Back</a> 
        <a href="" className="btn btn-primary mx-3" onClick={handlePrint}>Print</a>
      </div>
    </>
  );
}
