import * as React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { LogInContext } from "../context/logInContext";
import { useContext } from "react";

export default function ToggleButton() {
  const { logInSwitch } = useContext(LogInContext);

  return (
    <FormControlLabel
      onClick={logInSwitch}
      control={<Switch />}
      label="Log In"
    />
  );
}
