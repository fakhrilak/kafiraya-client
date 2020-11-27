import React from 'react'
import "./ModalLogin.css"
const Modal = (props) => {
  return (
    <div className ="modal-login">
        <div className='modal-login-wrapper'
        
        style={{
            transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
          }}
        >
            <div className='modal-login-body'
            >{props.children}</div>   
        </div>
    </div>
    
  )
}

export default Modal
