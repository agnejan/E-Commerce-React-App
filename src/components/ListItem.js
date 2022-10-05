// import React from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";

export default function ListItem(props) {
  const product = props.product;
  return (
    <Card raised={true} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        // component="img"
        // height="300"
        // objectFit="fit"
        // image={product.image}
        // alt={product.title}
        >
          <img
            srcSet={product.image}
            style={{ height: 200, objectFit: "cover" }}
          ></img>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap="true">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap="true">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" fullWidth="true">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
