import React from "react";
import "../styling/productDetail.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ProductDetail() {
  return (
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
            <img
              style={{ width: "100%" }}
              srcSet="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            />
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
            <h1>Title</h1>
            <h3>Price</h3>

            <h4>Description</h4>
            <h5>Category</h5>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetail;
