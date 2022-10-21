import { React, useState, useContext, useEffect } from "react";
import { LogInContext } from "../context/logInContext";
import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Cart() {
  const { cart, user } = useContext(LogInContext);

  console.log(cart);

  return (
    <div>
      <h2>My Cart 🛒</h2>
      {cart.length > 0 ? (
        <Box sx={{ flexGrow: 1, marginTop: 3, paddingBottom: 3 }}>
          <Grid container spacing={3}>
            {" "}
            {cart.map((item) => {
              return (
                <Grid
                  key={item.date}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  display="flex"
                  justifyContent="center"
                >
                  <ListItem product={item.product} showDeleteButton={true} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <div
          style={{
            margin: "5px",
            display: "flex",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Seems like you don't have anything in your cart yet 😮 </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
