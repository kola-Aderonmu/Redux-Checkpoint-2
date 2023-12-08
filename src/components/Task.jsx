import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions";
import ReactTimeAgo from "react-time-ago";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    const newDescription = prompt("Enter New Task:", task.description);
    if (newDescription !== null) {
      dispatch(editTask(task.id, newDescription));
    }
  };

  return (
    <div
      className="flex items-center justify-around my-6 w-80 h-24"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        borderRadius: "10px",
        fontFamily: "Caveat, cursive",
        fontSize: "22px",
      }}
    >
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
        className="mr-4 ml-2 capitalize"
      />
      <span className={task.isDone ? "line-through" : ""}>
        {task.description}
      </span>
      <ReactTimeAgo
        date={new Date(task.createdAt)}
        className="text-gray-600 ml-2 text-xs"
        locale="en-US"
        timeStyle="round-minute"
      />
      <button
        className="bg-blue-400 hover:bg-blue-600 text-white px-4 ml-2 rounded"
        onClick={handleEditTask}
      >
        Edit
      </button>
    </div>
  );
};

export default Task;
