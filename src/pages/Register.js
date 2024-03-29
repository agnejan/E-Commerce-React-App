import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { flexbox } from "@mui/system";
import { useState, useContext } from "react";
import { LogInContext } from "../context/logInContext";
import { Style } from "@mui/icons-material";

function Register() {
  // MATERIAL UI PASSWORD CODE
  // const [values, setValues] = React.useState({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setShowPassowrd(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //REGISTRATION
  const { registerNewUser, errorMessage } = useContext(LogInContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showPassword, setShowPassowrd] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");

  const handleEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setRegisterUsername(e.target.value);
  };

  const handleRegistration = () => {
    registerNewUser(registerEmail, registerPassword, registerUsername);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h2>Register:</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", rowGap: "1" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Your username"
          variant="outlined"
          color="action"
          value={registerUsername}
          onChange={handleUsernameChange}
        />

        <TextField
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          color="action"
          value={registerEmail}
          onChange={handleEmailChange}
        />
        {/* <TextField
          id="outlined-basic"
          label="Your password"
          variant="outlined"
          color="action"
          value={registerPassword}
          onChange={handlePasswordChange}
        /> */}
        <FormControl sx={{ width: "25ch" }} variant="outlined" color="action">
          <InputLabel htmlFor="outlined-adornment-password">
            Choose a password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={registerPassword}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Choose a password"
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegistration}
        >
          REGISTER
        </Button>
      </Box>
      {errorMessage ? (
        <p style={{ color: "red" }}> {errorMessage} 😢 Try again!</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Register;
