import "./App.css";
// import List from "./components/List";
import ProductList from "./pages/ProductList";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});

// const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          {/* <div style={{ marginTop: 20 }}></div> */}
          <ProductList />
          <p>Footer</p>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
