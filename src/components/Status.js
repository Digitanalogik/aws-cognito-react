import React, { useContext } from 'react';
import { AccountContext } from './Account';
import '../styles/session.css';

const Status = () => {
  const { isLogged, logout } = useContext(AccountContext);

  return (
    <div className="session">
      {isLogged 
        ? <button onClick={logout}>Logout</button>
        : <span>Please login</span>
      }
    </div>
  );
};

export default Status;
