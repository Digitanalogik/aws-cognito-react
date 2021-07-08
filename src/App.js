import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Account } from './components/Account';
import Status from './components/Status';

const App = () => {
  return (
    <Account>
      <Status />
      <SignUp />
      <LogIn />
    </Account>
  );
}

export default App;
