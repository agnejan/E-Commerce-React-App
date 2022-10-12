import { createContext, useState, useEffect } from "react";

export const LogInContext = createContext();

export const LogInContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logInSwitch = () => {
    setLoggedIn(!loggedIn);
    console.log(loggedIn);
  };

  return (
    <LogInContext.Provider value={{ logInSwitch, loggedIn }}>
      {props.children}
    </LogInContext.Provider>
  );
};
