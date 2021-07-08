import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log("Session: ", session);
        setStatus(true);
      });
  }, [getSession]);

  return <div>{status ? "You're logged in" : "Please login"}</div>;
};

export default Status;
