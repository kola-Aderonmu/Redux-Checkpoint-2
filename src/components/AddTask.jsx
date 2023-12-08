// AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskDescription.trim() !== "") {
      dispatch(
        addTask({
          description: taskDescription,
          isDone: false,
          createdAt: Date.now(),
        })
      );
      setTaskDescription("");
    }
  };

  return (
    <div className="my-4">
      <input
        className="border border-gray-300 p-2 mr-2 rounded-lg shadow-lg font-mono"
        type="text"
        placeholder="Add a New Task..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded-lg font-mono ml-4"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
