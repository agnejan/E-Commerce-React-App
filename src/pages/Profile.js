import React from "react";
import { useContext } from "react";
import { LogInContext } from "../context/logInContext";
import Button from "@mui/material/Button";

function Profile() {
  const { user } = useContext(LogInContext);
  console.log(user);
  return user ? (
    <div>
      <h3> Hey {user.displayName} ! 👋</h3>
      <p>Your username: {user.displayName}</p>
      <p>Your email: {user.email}</p>
      <Button color="action" variant="outlined">
        Update your password
      </Button>
    </div>
  ) : (
    <p>not logged in</p>
  );
}

export default Profile;
