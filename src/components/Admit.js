import React from 'react'
import demoAdmit from "../assets/demo2.png"
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
      <a href="/about" className="btn btn-primary ">Back</a> 
      <a href="" className="btn btn-primary mx-3" onClick={handlePrint}>Print</a>
    </div>
  </>
  )
}
