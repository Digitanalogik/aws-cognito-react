import React, { useState } from 'react';
import UserPool from './UserPool';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
    });
  }

  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <form id="signupForm" onSubmit={onSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;