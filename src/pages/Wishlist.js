import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { WishlistContext } from "../context/wishlistContext";

function Wishlist() {
  const { wishListedProducts } = useContext(WishlistContext);
  console.log(wishListedProducts);
  return (
    <div>
      <h2>My Wishlist 💜</h2>
      {wishListedProducts.length > 0 ? (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
          <Grid container spacing={3}>
            {" "}
            {wishListedProducts.map((product) => {
              return (
                <Grid
                  key={product.id}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  display="flex"
                  justifyContent="center"
                >
                  <ListItem product={product} />
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
          <div>Seems,like you don't have anything in your wishlist yet😮 </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
