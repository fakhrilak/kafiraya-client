import React from 'react'
import Logo from "../../img/logo.png"
import "./LandingPage.css"
const LandingPage = ({HandleLogin,setHandleLogin}) => {
  return (
    <div>
        <div className="rotating">
          <img src={Logo} className="App-logo" alt="logo"/>
        </div>       
        <div style={{color:"#2e2a2a"}}>
          <h1 onClick={()=>setHandleLogin(!HandleLogin)}>ZILOG-APPLICATION</h1>
        </div>
    </div>
  )
}

export default LandingPage
