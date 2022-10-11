import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = (props) => {
  const [wishListedProducts, setWishlistedProducts] = useState();
  const wishlistedArray = [];
  const addToWishlist = () => {
    wishlistedArray.push("");
    setWishlistedProducts(wishlistedArray);
    console.log("wishlisted Item");
  };

  return (
    <WishlistContext.Provider value={{ addToWishlist, wishListedProducts }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
