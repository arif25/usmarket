import React from 'react';
import logo from '../Assets/images/logo.png';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="secLogin">
    <div className="backgroundOpacity"></div>
        <div className="bxLogin">              
            <div className="titleLoginRegister">Sign In</div>
            <div className="loginLogo">
                <img src={logo} alt="Logo" />
                <h5>You Can Do Better</h5>
                <h6>Analyze | ACT | Achieve</h6>
            </div>
            <div className="loginRegisterForm">
            <form>
                <label>
                    <input type="text" name="name" placeholder="First Name" />
                </label>
                <label>
                    <input type="text" name="name" placeholder="Last Name" />
                </label>
                <label>
                    <input type="text" name="name" placeholder="Email Address" />
                </label>
                <label>
                    <input type="text" name="name" placeholder="Phone Number" />
                </label>
                <label>
                    <input type="text" name="name" placeholder="Password" />
                </label>
                <label>
                    <input type="text" name="name" placeholder="Confirm Password" />
                </label>
                <button className="loginsubmit"><Link to="/" className="navLinks navNews">Sign Up</Link></button>
                </form>  
                
                <div className="orSignin">
                    <h5>Or Sign in with one of These:</h5>
                </div> 
                
                <div className="register"><Link to="/login" className="navLinks navNews">Back to Login</Link></div>
            </div>
        </div>
    </div>
  );
}

export default Register;
