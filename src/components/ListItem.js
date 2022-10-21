import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import LikeButton from "./LikeButton";
import { WishlistContext } from "../context/wishlistContext";
import { useContext, useEffect } from "react";
import { LogInContext } from "../context/logInContext";
import RemoveButton from "./RemoveButton";

export default function ListItem(props) {
  const product = props.product;
  const { user, removeCartItem } = useContext(LogInContext);

  const { addToWishlist, wishListedProducts } = useContext(WishlistContext);

  const handleAddToWishlist = () => {
    user && addToWishlist(product);
  };

  const isWishListed = () => {
    const wished = wishListedProducts.filter((item) => item.id === product.id);
    return wished.length ? true : false;
  };

  const handleRemoveFromCart = () => {
    removeCartItem(user.email, product.id);
    console.log("removeclicked");
  };

  // const isWishListed = useEffect(() => {
  //   const func = () => {
  //     // console.log(product);
  //     const wished = wishListedProducts.filter(
  //       (item) => item.id === product.id
  //     );
  //     // console.log(wished);
  //     return wished.length ? true : false;
  //   };
  // }, [wishListedProducts]);

  return (
    <Card raised={true} sx={{ maxWidth: 345 }}>
      {props.showDeleteButton && (
        <RemoveButton onClick={handleRemoveFromCart}></RemoveButton>
      )}
      <CardActionArea>
        <CardMedia>
          {/* <Badge badgeContent={product.category} color="info" anchorOrigin={vertical:'bottom', horizontal:'left'}> */}
          <img
            srcSet={product.image}
            style={{ height: 200, objectFit: "cover" }}
          ></img>
          {/* </Badge> */}
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap={true}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap={true}>
            {product.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontWeight: "bold" }}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/productdetail/${product.id}`}
          id={product.id}
          variant="contained"
          size="small"
          fullWidth={true}
          color="secondary"
        >
          Details
        </Button>
        <LikeButton
          onChange={handleAddToWishlist}
          checked={isWishListed()} // parentheses means calling at every render
        ></LikeButton>
      </CardActions>
    </Card>
  );
}
