import React from 'react';
import './Navbar.css';
import {NavbarData} from './NavbarData';
import Dropdown from "../Dropdown/Dropdown";
import {connect} from "react-redux";
const Navbar = ({HandleLogin,setHandleLogin,auth:{isAuthenticated}}) => {
    
  return (  
      <div className = "Container-Navbar">
        {isAuthenticated && 
        <Dropdown 
        data={NavbarData} 
        HandleLogin={HandleLogin} 
        setHandleLogin={setHandleLogin}/>}
    </div>
  )
    }
function mapStateToProps(state) {
  return ({
    auth: state.auth,
  })
}

export default connect(mapStateToProps, {})(Navbar);
