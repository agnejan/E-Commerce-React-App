import React from "react";
import FilterBox from "../components/FilterBox";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

function Home() {
  const { filterCategory } = useContext(FilterContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
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
