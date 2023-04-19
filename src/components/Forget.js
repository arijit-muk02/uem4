import React from 'react'
import { Link } from 'react-router-dom'
export default function Forget() {
  return (
    <>
    <section id="landpage">
  <div className="container ">
    <div className="row">
      <div className="login-page">
        <div className="form" style={{ paddingTop: 30, marginBottom: 50 }}>
          <h5>Reset Password</h5>
          <form className="login-form" style={{ paddingTop: 15 }}>
            <input type="password" placeholder="Enter Old Password" />
            <input type="password" placeholder="Enter New Password" />
            <input type="password" placeholder="Enter New Password Again" />
            {/* <button formaction="profile.html">Login</button> */}
            <button className="btn btn-secondary" type="button">
              Reset Password
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
             <Link to="/">Forget Password?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
