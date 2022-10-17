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
import { ProductsContextProvider } from "./context/productsContext";
import { FilterContextProvider } from "./context/filterContext";
import ToggleButton from "./components/ToggleButton";
import { useContext } from "react";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Chat from "./pages/Chat";
import { WishlistContextProvider } from "./context/wishlistContext";
import { LogInContextProvider } from "./context/logInContext";
import { LogInContext } from "./context/logInContext";

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
    action: {
      main: "#d500f9",
    },
  },
});

function App() {
  // const { logOut, auth, user } = useContext(LogInContext);
  // const [filterValue, setFilterValue] = useState("all");
  // // const [filterApplied, setFilterApplied] = useState(false);

  // const filterCategory = (category) => {
  //   console.log(category);
  //   setFilterValue(category);
  //   // setFilterApplied(true);
  // };
  // const handleLogOut = () => {
  //   logOut();
  //   console.log(user);
  //   console.log(auth);
  // };
  return (
    <WishlistContextProvider>
      <LogInContextProvider>
        <FilterContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              <ThemeProvider theme={theme}>
                <div className="App">
                  <NavBar />
                  {/* <ToggleButton /> */}
                  <Routes>
                    <Route
                      path="/home"
                      element={<Home />} //filterCategory={filterCategory}
                    ></Route>
                    <Route
                      path="/products"
                      element={<ProductList />} //filterValue={filterValue}
                    ></Route>
                    <Route
                      exact
                      path="/productdetail/:id"
                      element={<ProductDetail />}
                    ></Route>
                    <Route path="/wishlist" element={<Wishlist />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/chat" element={<Chat />}></Route>
                  </Routes>
                  {/* <Footer /> */}
                </div>
              </ThemeProvider>
            </BrowserRouter>
          </ProductsContextProvider>
        </FilterContextProvider>
      </LogInContextProvider>
    </WishlistContextProvider>
  );
}

export default App;
