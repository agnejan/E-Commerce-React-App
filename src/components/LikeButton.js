import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useEffect } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function LikeButton(props) {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
}
