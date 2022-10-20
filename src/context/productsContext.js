import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    !products && fetchData();
  }, []); // this means that useeffect runs only the first time on intial render, but not on subsequent renders

  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
