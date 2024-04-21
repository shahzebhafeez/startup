import React from 'react';
import "./signin.css";

function Signin() {
  return (
    <div className='completeform'>
      {/* left side */}
      <div className="leftimage">
        <div className="innerimage">
            <div className="yourimage">
            
            </div>
        
        </div>
        
      </div>
      {/* right side */}
      <div className="formright">
        <div className="formtitle">Titan.</div>
        <div className="formsubtitle">Client Portal</div>
            <form >
                <div className="Email">
                    <p>Email</p>   
                <input type="text" className="Emailinput" />
                </div>
                <div className="password">
                    <p>password</p>
                <input type="text" className="passwordinput" />
                </div>
                <div className="loginbtn">
                <button className="tologin">Login</button>
                </div>
                
                <div className="forgotpass">Forgot password? </div>
                <div className="forsignup">
                    Not a client yet?
                    Sign Up
                </div>
            </form>  
        </div>
    </div>
  );
}

export default Signin;
