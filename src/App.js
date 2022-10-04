import "./App.css";
// import List from "./components/List";
import ProductList from "./pages/ProductList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <List /> */}
      <ProductList />
      <h2>Footer</h2>
    </div>
  );
}

export default App;
