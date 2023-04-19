import React from 'react'
import { Link } from 'react-router-dom'
export default function Attendance() {
  return (
    <>
    <section id="landpage">
  <div className="container ">
    <div className="row">
      <div className="login-page">
        <div className="form" style={{ paddingTop: 30, marginBottom: 50 }}>
          <h1>Welcome</h1>
          <form className="login-form" style={{ paddingTop: 15 }}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Enter Class Code" />
            {/* <button formaction="profile.html">Login</button> */}
            <button className="btn btn-secondary" type="button">
              Mark Attendance
            </button>
            <label>
              <input
                style={{ width: "auto", marginTop: 20 }}
                type="checkbox"
                name="remember"
              />{" "}
              Remember Me
            </label>
            <p className="message">
              {" "}
              <a href="/">Forget Password?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="text-center">
  <Link to="/about" className='btn btn-primary'>Back</Link>
</div>
    </>
  )
}
