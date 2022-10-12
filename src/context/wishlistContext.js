import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = (props) => {
  const [wishListedProducts, setWishListedProducts] = useState([]);

  const addToWishlist = (product) => {
    // console.log(product);
    const newWishListedItem = product;
    setWishListedProducts([...wishListedProducts, newWishListedItem]);
    // console.log(wishListedProducts);
  };

  return (
    <WishlistContext.Provider value={{ addToWishlist, wishListedProducts }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
