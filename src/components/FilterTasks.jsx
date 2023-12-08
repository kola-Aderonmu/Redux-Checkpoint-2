// FilterTasks.js
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="my-4 ">
      <label className="mr-8 font-mono">Filter:</label>
      <select onChange={handleFilterChange}>
        <option value="" className="font-mono">
          -----------
        </option>
        <option value="all" className="font-mono text-center">
          All
        </option>
        <option value="done" className="font-mono text-center">
          Done
        </option>
        <option value="notDone" className="font-mono text-center">
          Not Done
        </option>
      </select>
    </div>
  );
};

export default FilterTasks;
