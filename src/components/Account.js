import React, { createContext, useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from './UserPool';

const AccountContext = createContext();

const Account = (props) => {

  const [isLogged, setIsLogged] = useState(false);

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject("User not logged.");
      }
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ 
        Username,
        Pool
      });
  
      const authDetails = new AuthenticationDetails({
        Username,
        Password
      });
  
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data);
          setIsLogged(true);
          resolve(data);
        },
        onFailure: (err) => {
          console.error("onFailure: ", err);
          setIsLogged(false);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          setIsLogged(true);
          resolve(data);
        }
      });  
    })
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      console.log("Signing out user...", user);
      user.signOut();
      setIsLogged(false);
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, isLogged, getSession, logout }}>
      { props.children }
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
