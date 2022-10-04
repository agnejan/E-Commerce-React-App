// import React from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ListItem(props) {
  const product = props.product;
  return (
    <Card raised={true} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

// function ListItem(props) {
//   const product = props.product;

//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>{product.price}</p>
//       <img srcSet={product.image}></img>
//       <button onClick={props.handlePopUp}>More Details</button>
//     </div>
//   );
// }

// export default ListItem;
