import React from 'react'
import {Link} from 'react-router-dom';
import "../assets/login.css";
export default function Login() {
  return (
    <>
    <div className="form" style={{marginTop: "30px"}}>
            <h1>Welcome</h1>

            <form className="login-form" style={{paddingTop: "15px"}}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                LOGIN AS
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/about">Student</Link>
                <Link className="dropdown-item" to="/about">Teacher & Stuff</Link>
              </div> <br/><br/>
              <label>
                <input type="checkbox" name="remember"/> Remember Me
              </label>
              <p className="message"> <a href="/">Forget Password?</a></p>
              <p className="message"> <a href="https://uem.edu.in">Official Website</a></p>
            </form>
              
            
          </div>
    </>
  )
}
