import React from "react";
import Task from "../components/Task";
function TaskList({category, taskData, handleRemove}) {
  return (
    <div className="tasks">
      {taskData.map((task) => (
    <Task key={task.text} text={task.text} category={task.category} handleDelete={handleRemove} />))}
    </div>
  );
}

export default TaskList;
