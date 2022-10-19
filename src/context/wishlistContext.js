import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = (props) => {
  const [wishListedProducts, setWishListedProducts] = useState([]);

  const addToWishlist = (product) => {
    console.log(product);
    if (
      wishListedProducts.filter((item) => item.id === product.id).length > 0
    ) {
      // const index = wishListedProducts.indexOf(newWishListedItem);
      const removeProduct = wishListedProducts.filter(
        (item) => item.id !== product.id
      );
      // removeProduct.splice(index, 1);
      console.log(removeProduct);
      setWishListedProducts(removeProduct);
    } else {
      setWishListedProducts([...wishListedProducts, product]);
    }
  };

  console.log(wishListedProducts);

  // const removeDuplicates = (arr) => {
  //   return [...new Set(arr)];
  // };

  return (
    <WishlistContext.Provider value={{ addToWishlist, wishListedProducts }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
