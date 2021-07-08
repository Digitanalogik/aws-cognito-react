import React, { useState, useContext } from 'react';
import { AccountContext } from './Account';
import '../styles/form.css';

const LogIn = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    
    authenticate(email, password)
      .then(data => {
        console.log("Logged in!", data);
      })
      .catch(err => {
        console.error("Failed to login!", err);
      });
  }

  return (
    <div className="userForm login">
      <h3 className="title">Log In</h3>
      <form id="loginForm" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
};

export default LogIn;
