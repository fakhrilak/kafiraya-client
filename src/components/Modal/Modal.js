import React from 'react'
import "./Modal.css"
const Modal = (props) => {
  const right = props.right
  const left = props.left
  return (
    <div className ="modal">
        <div className='modal-wrapper'
        
        style={{
            transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
            right:right,
            left:left
        }}
        >
            <div className='modal-body'
            >{props.children}</div>   
        </div>
    </div>
    
  )
}

export default Modal
