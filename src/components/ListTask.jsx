// ListTask.js
import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import FilterTasks from "./FilterTasks";


const ListTask = () => {
  const tasks = useSelector((state) => {
    const filter = state.filter;
    if (filter === "done") {
      return state.tasks.filter((task) => task.isDone);
    } else if (filter === "notDone") {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks;
    }
  });

  return (
    <div className="mt-4">
      <FilterTasks />
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
