import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2";

function ProductList() {
  const [products, setProducts] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchData();
  }, []);

  const handlePopUp = (e) => {
    console.log(e);
    setShow(true);
  };

  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products && // && means if character === true, it waits for products to be fetched before it maps them
            products.map((product) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  justifyContent="center"
                >
                  <ListItem
                    handlePopUp={handlePopUp}
                    product={product}
                    key={product.id}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductList;
