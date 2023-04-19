import React from "react";
import "../assets/info.css"
import myImage from "../assets/jerry.jpg";
import { Link } from "react-router-dom";
export default function Info() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3">
            <img src={myImage} width={"60%"} alt="" />
            <h1 className="mt-4">Jerry</h1>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <h5>Name</h5>
                <div className="alert alert-secondary" role="alert">
                  Jerry Karmakar
                </div>
                <h5>Enrollment</h5>
                <div className="alert alert-secondary" role="alert">
                  12345678
                </div>
                <h5>Stream</h5>
                <div className="alert alert-secondary" role="alert">
                  CST
                </div>
                <h5>Registration No</h5>
                <div className="alert alert-secondary" role="alert">
                  30201020302010
                </div>
                <h5>Birthday</h5>
                <div className="alert alert-secondary" role="alert">
                  29th Feb 2002
                </div>
                <h5>Gender</h5>
                <div className="alert alert-secondary" role="alert">
                  Male
                </div>
              </div>
              <div className="col-lg-6">
                <h5>Nationality</h5>
                <div className="alert alert-secondary" role="alert">
                  Indian
                </div>
                <h5>Blood Group</h5>
                <div className="alert alert-secondary" role="alert">
                  A+
                </div>
                <h5>Registration Year</h5>
                <div className="alert alert-secondary" role="alert">
                  2020
                </div>
                <h5>Address</h5>
                <div className="alert alert-secondary" role="alert">
                  Kolkata
                </div>
                <h5>Contact</h5>
                <div className="alert alert-secondary" role="alert">
                  987654321
                </div>
                <h5>Email</h5>
                <div className="alert alert-secondary" role="alert">
                  jerry@ratmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/about" className="btn my-3 btn-primary mt-4">Back</Link>
      </div>
    </>
  );
}
