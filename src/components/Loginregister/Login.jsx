import React from 'react';
import logo from '../Assets/images/logo.png';
import { Link } from "react-router-dom";

function Login() {  
  return (
    <div className="secLogin">
        <div className="backgroundOpacity"></div>
        <div className="bxLogin">              
            <div className="titleLoginRegister">Sign In</div>
            <div className="loginLogo">
                <img src={logo} alt="Logo" />
                <h5>Make IT Happen!</h5>
                <h6>Analyze | ACT | Achieve</h6>
            </div>
            <div className="loginRegisterForm">
            <form>
                <label>
                    <span>Email Address:</span>
                    <input type="text" name="name" placeholder="Email Address" />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="text" name="name" placeholder="Password" />
                </label>
                <div className="loginsubmit"><Link to="/" className="navLinks navNews">Sign In</Link></div>
                </form>    
                          
                <div className="forgotPassword"><Link to="/" className="navLinks navNews">Forgot Password</Link>   </div>
                <div className="orSignin">
                    <h5>Or Sign in with one of These:</h5>
                </div> 
                
                <div className="register"><Link to="/register" className="navLinks navNews">Register</Link></div>
            </div>
        </div>
    </div>
  );
}

export default Login;
