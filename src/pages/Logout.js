import { React, useContext } from "react";
import Button from "@mui/material/Button";
import { LogInContext } from "../context/logInContext";
import Box from "@mui/material/Box";

function Logout() {
  const { logOut, auth, user } = useContext(LogInContext);

  const handleLogOut = () => {
    logOut();
    // console.log(user);
    // console.log(auth);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "80%",
      }}
    >
      <Box
        // component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {!user ? (
          <p style={{ width: "auto", fontSize: "20px" }}>
            {" "}
            You are now logged out! ✅
          </p>
        ) : (
          <Button onClick={handleLogOut} variant="contained">
            LOG OUT
          </Button>
        )}
      </Box>
    </div>
  );
}

export default Logout;
