import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { WishlistContext } from "../context/wishlistContext";

function Wishlist() {
  //   const { wishlistedProducts } = useContext(WishlistContext);
  //   return (
  //     <div>
  //       <Box sx={{ flexGrow: 1, marginTop: 3 }}>
  //         <Grid container spacing={3}>
  //           {wishlistedProducts.map((product) => {
  //             if (!wishlistedProducts) {
  //               return (
  //                 <div>You don't have any items yet in your Wishlist 😲</div>
  //               );
  //             } else {
  //               return (
  //                 <Grid
  //                   key={product.id}
  //                   item
  //                   xs={12}
  //                   sm={6}
  //                   md={3}
  //                   display="flex"
  //                   justifyContent="center"
  //                 >
  //                   <ListItem product={product} />
  //                 </Grid>
  //               );
  //             }
  //           })}
  //         </Grid>
  //       </Box>
  //     </div>
  //   );
}

export default Wishlist;
