import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = (props) => {
  const [wishListedProducts, setWishListedProducts] = useState([]);

  const addToWishlist = (product) => {
    const newWishListedItem = product;
    // if (
    //   wishListedProducts.filter((item) => item.id === newWishListedItem.id)
    //     .length > 0
    // ) {
    //   const index = wishListedProducts.indexOf(newWishListedItem);
    //   wishListedProducts.splice(index, 1);
    // } else {
    setWishListedProducts(
      removeDuplicates([...wishListedProducts, newWishListedItem])
    );
    // }
    console.log(wishListedProducts);
  };

  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };

  return (
    <WishlistContext.Provider value={{ addToWishlist, wishListedProducts }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
