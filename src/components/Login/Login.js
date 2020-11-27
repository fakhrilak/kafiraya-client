import React,{useState} from 'react'
import "./Login.css"
import {handleLogin} from "../../redux/action/auth";
import Modal from "../ModalLogin/ModalLogin"
import{connect} from "react-redux"
const Login = ({handleLogin,HandleLogin,setHandleLogin,auth:{error}}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

const { email, password } = formData;

const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
const Login=()=>{
  setHandleLogin(false)
}
const onSubmit = (e) => {
    e.preventDefault();   
    handleLogin(email, password , Login);
  };

  return (
    <div className = "Container-Login">
      <Modal className="modal-login" show={HandleLogin}>
          <h1>LOGIN</h1>
          <p>{error}</p>
          <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    style={{width:250}}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(e) => onChange(e)}
                    placeholder='Password'
                    className='custom-input'
                    style={{width:250}}
                    />
              </div>
              <div className='form-submit'>
                  <button
                    className='btn-submit'
                  >
                      LOGIN
                  </button>
              </div>          
          </form>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleLogin })(Login);
