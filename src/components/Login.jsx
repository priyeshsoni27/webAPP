import React, { useState } from 'react'
import {GoogleLogin,  GoogleLogout } from 'react-google-login'

const Login = () => {
    const[showLoginButton,setShowLoginButton]=useState(false);
    const [showLogoutButton,setShowLogoutButton]=useState(false)

    const onLoginSuccess=(res)=>{
    console.log("response",res.profileObj)
    setShowLoginButton(false)
    setShowLogoutButton(true)
    }
    const onLoginFailure=()=>{
        console.log("response")
    }
    const onSignOutSuccess=()=>{
        alert("you have been logged out successfully")
        setShowLoginButton(false)
        setShowLogoutButton(true)
    }


    const clientID=""
  return (
    <div>
        heloo
       {showLoginButton && <GoogleLogin
    clientId={clientID}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onLoginFailure}
    cookiePolicy={'single_host_origin'}
  />}
  {showLogoutButton? <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={onSignOutSuccess}
    >
    </GoogleLogout>:null}
  </div>
  )
}

export default Login