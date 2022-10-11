import { useContext } from "react";
import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import { ProductsContext } from "../context/productsContext";

function ProductList(props) {
  const { products } = useContext(ProductsContext); // here destructuring instead of writing const products = useContext(ProductsContext.products)
  console.log(products);
  const filteredProduct =
    products &&
    products.filter((item) => {
      return item.category === props.filterValue || props.filterValue === "all";
    });

  const resetFilter = () => {
    props.filterValue("all");
  };

  return (
    <div>
      <Button onClick={resetFilter}> X Clear Filters</Button>
      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={3}>
          {products && // && means if character === true, it waits for products to be fetched before it maps them
            filteredProduct.map((product) => {
              if (!product) {
                return (
                  <div>
                    Sorry, we don't seem to have anything to offer on this
                    category
                  </div>
                );
              } else {
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
              }
            })}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductList;
