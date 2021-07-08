import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';
import '../styles/session.css';

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log("Session: ", session);
        setStatus(true);
      });
  }, [getSession]);

  return (
    <div className="session">
      {status ? <button onClick={logout}>Logout</button> : "Please login"}
    </div>
  );
};

export default Status;
