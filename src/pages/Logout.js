import { React, useContext } from "react";
import Button from "@mui/material/Button";
import { LogInContext } from "../context/logInContext";

function Logout() {
  const { logOut, auth, user } = useContext(LogInContext);

  const handleLogOut = () => {
    logOut();
    console.log(user);
    console.log(auth);
  };
  return (
    <div>
      <Button onClick={handleLogOut} variant="outlined">
        LOG OUT
      </Button>
      {!user && <p> You are now logged out! ✅</p>}
    </div>
  );
}

export default Logout;
