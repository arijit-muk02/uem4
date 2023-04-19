import React from "react";
import "../assets/header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div style={{ backgroundColor: "#1C3879" }}>
      <div className="container">
        <div id="header" style={{ padding: "5px" }}>
          <h1 className="collname"><Link style={{color:"white"}} to="/">UNIVERSITY OF ENGINEERING AND MANAGEMENT</Link></h1>
          <h3 className="address">
            University Area, Plot No. III, New Town Rd, Kolkata, West Bengal 700160
          </h3>
        </div>
      </div>
    </div>
  );
}
