import React from "react";
import FilterBox from "../components/FilterBox";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductList from "./ProductList";

function Home({ filterCategory }) {
  // const [filterValue, setFilterValue] = useState("all");
  // const [filterApplied, setFilterApplied] = useState(false);

  // const filterCategory = (category) => {
  //   console.log(category);
  //   setFilterValue(category);
  //   setFilterApplied(true);
  //   // return <ProductList filterValue={filterCategory}></ProductList>;
  // };

  // const handleClick = () => {
  //   console.log();
  //   return <ProductList></ProductList>;
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FilterBox
        component={Link}
        to={"/products"}
        handleClick={filterCategory}
      ></FilterBox>
    </div>
  );
}

export default Home;
