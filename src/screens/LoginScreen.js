import React, { useState } from 'react'
import './LoginScreen.css'
import logo from '../assets/NetflixLogo.png'
import SiginUpScreen from './SiginUpScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);


  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img className="loginScreen_logo" src={logo} alt="Netflix Logo" />
        <button onClick={() => setSignIn(true)}
          className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {
          signIn ? (<SiginUpScreen/>) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted">GET STARTED</button>
                </form>
              </div>
            </>
          )
        }

      </div>

    </div>
  )
}

export default LoginScreen