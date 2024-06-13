
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './login.module.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!validateEmail(username)) {
      setEmailError('Invalid email address.');
     
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('use Strong password');
     
    } else {
      setPasswordError('');
    }
    
  };



  const validateEmail = (username:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  };

  const validatePassword = (password:string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
    

   
  };
  return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'500px'}}>
        <div className={classes.login_container}>
          <h2 style={{marginLeft:'60px',color:'#ddd'}}>Login</h2>
          {error && <p style={{color:'red'}}>{error}</p>}
          <form  onSubmit={handleSubmit}>
            <div >
              <label>Username</label>
              <input
              className={classes.input}
                required
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p style={{color:'red'}}>
                {emailError}
              </p>
            </div>
            <div style={{marginTop:'30px'}}>
              <label>Password</label>
              <input
                required
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{color:"red"}}>
                {passwordError}
              </div>
            </div>
            <button type="submit" style={{marginTop:'30px'}}>
              Submit
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default Login;
