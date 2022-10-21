import { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = (props) => {
  const [filterValue, setFilterValue] = useState("all");

  const filterCategory = (category) => {
    setFilterValue(category);
  };

  const clearFilter = () => {
    setFilterValue("all");
  };

  return (
    <FilterContext.Provider
      value={{ filterValue, filterCategory, clearFilter }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};
