import { useContext } from "react";
import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import { ProductsContext } from "../context/productsContext";
import { FilterContext } from "../context/filterContext";

function ProductList() {
  const { products } = useContext(ProductsContext); // here destructuring instead of writing const products = useContext(ProductsContext.products)
  const { filterValue } = useContext(FilterContext);
  const { clearFilter } = useContext(FilterContext);

  const filteredProduct =
    products &&
    products.filter((item) => {
      return item.category === filterValue || filterValue === "all";
    });

  return (
    <div style={{ paddingBottom: "40px" }}>
      <Button
        style={{ marginTop: 20 }}
        onClick={clearFilter}
        variant="outlined"
        color="action"
      >
        {" "}
        X Clear Filters
      </Button>
      {filteredProduct.length > 0 ? (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
          <Grid container spacing={3}>
            {filteredProduct.map((product) => {
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
          <div> Sorry, we don't have anything in this category 😢 </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
