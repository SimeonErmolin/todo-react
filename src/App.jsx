import React from "react";
import { Todo } from "./modules for ToDo/Todo";

export function App() {

  return (
    <div className="todo">
      <Todo importance='high' />
      <Todo importance='low' />
    </div>
  )
}
