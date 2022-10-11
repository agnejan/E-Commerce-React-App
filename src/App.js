import "./App.css";
// import List from "./components/List";
import ProductList from "./pages/ProductList";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer2 from "./components/Footer2";
import { useState } from "react";
import { ProductsContextProvider } from "./context/productsContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#ffc400",
    },
    info: {
      main: "#f5eaf7",
    },
  },
});

function App() {
  const [filterValue, setFilterValue] = useState("all");
  // const [filterApplied, setFilterApplied] = useState(false);

  const filterCategory = (category) => {
    console.log(category);
    setFilterValue(category);
    // setFilterApplied(true);
  };

  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/home"
                element={<Home filterCategory={filterCategory} />}
              ></Route>
              <Route
                path="/products"
                element={<ProductList filterValue={filterValue} />}
              ></Route>
              <Route
                exact
                path="/productdetail/:id"
                element={<ProductDetail />}
              ></Route>
              <Route path="/blog" element={<Blog />}></Route>
            </Routes>
            <Footer2 />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
