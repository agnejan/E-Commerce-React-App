import React from "react";
import { useContext } from "react";
import { LogInContext } from "../context/logInContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Profile() {
  const { user } = useContext(LogInContext);
  // console.log(user);
  return user ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        rowGap: "5vh",
        height: "80%",
      }}
    >
      <p style={{ fontSize: "30px" }}>
        {" "}
        Hey <span style={{ fontWeight: "bold" }}>{user.displayName}</span> ! 👋
      </p>
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
