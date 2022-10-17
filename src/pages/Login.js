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
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LogInContext } from "../context/logInContext";

function Login() {
  // MUI PASSWORD CODE
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
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // LOG IN CODE

  const { logIn, user, errorMessage } = useContext(LogInContext);

  // can add useeffect if user(true) --> navigate to profile

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = async () => {
    const success = await logIn(email, password);
    if (success) {
      navigate("/profile");
    }
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
      <h2>Log in:</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", rowGap: "1" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={email}
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          color="action"
          onChange={handleEmailChange}
        />
        {/* <TextField
          id="outlined-basic"
          label="Your password"
          variant="outlined"
          color="action"
        /> */}
        <FormControl sx={{ width: "25ch" }} variant="outlined" color="action">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
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
            label="Password"
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleLogIn}>
          LOG IN
        </Button>
      </Box>
      {errorMessage ? (
        <p style={{ color: "red" }}> {errorMessage} 😢</p>
      ) : (
        <p></p>
      )}
      <p>
        Don't have an account yet?{" "}
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "#d500f9",
            fontWeight: "bold",
          }}
        >
          <span> Register here</span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
