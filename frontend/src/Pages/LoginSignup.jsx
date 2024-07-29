import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignupContainer">
        <h1>Sign Up</h1>
        <div className="loginsignupFields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">
          Already Have an account <span>Login Here</span>
        </p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing , I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
