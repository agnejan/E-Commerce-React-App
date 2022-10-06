import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ProductList() {
  const [products, setProducts] = useState();
  // const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchData();
  }, []);

  // const handlePopUp = (e) => {
  //   console.log(e);
  //   setShow(true);
  // };

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={3}>
          {products && // && means if character === true, it waits for products to be fetched before it maps them
            products.map((product) => {
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
    </div>
  );
}

export default ProductList;
