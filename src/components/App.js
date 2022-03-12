import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskData, setTaskData] = useState(TASKS)
  const [categoryList, setCategoryList] = useState("ALL")
  

  

  function handleRemove(text) {
  const newList = taskData.filter((task) => task.text !== text);
    setTaskData(newList);
    
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList  category={CATEGORIES}  taskData={TASKS} handleDelete={handleRemove} />
    </div>
  );
}

export default App;
