import React from "react";
import "../styling/productDetail.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { LogInContext } from "../context/logInContext";

function ProductDetail() {
  let { id } = useParams();
  const [products, setProducts] = useState();
  const [ratingValue, setRatingValue] = React.useState(2);
  const { loggedIn } = useContext(LogInContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    products && (
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <div className="image">
              <img style={{ width: "50%" }} srcSet={products.image} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <div className="details">
              <Chip
                label={products.category}
                color="info"
                style={{ width: "40%" }}
              />
              <h1>{products.title}</h1>
              <Typography component="legend">Rating:</Typography>
              <Rating
                name="simple-controlled"
                value={products.rating.rate}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
              <h3>Price: ${products.price}</h3>
              <p style={{ fontWeight: "lighter" }}>{products.description}</p>

              {loggedIn && (
                <Button variant="contained" style={{ width: "50%" }}>
                  Add to Cart <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    )
  );
}

export default ProductDetail;
