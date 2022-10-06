import "./App.css";
// import List from "./components/List";
import ProductList from "./pages/ProductList";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
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

// const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route
              exact
              path="/productdetail/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
