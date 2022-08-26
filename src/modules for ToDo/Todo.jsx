import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export function Todo(props) {
  const title = props.importance == 'high' ? 'HIGH' : 'LOW';
  const [tasksList, setTasksList] = useState([]);
  const listOfTasks = tasksList.map((item, index) => {
    return <TodoItem key={item.toString()} textTask={item} taskNumber={index} onDeleteTask={deleteTask} />
  })

  function addTask(e) {
    if (e == '') return;
    if (tasksList.some(task => e == task) == true) {
      alert('Пошёл нахуй, долбаёб! Такая заметка уже существует!');
    } else {
      setTasksList([...tasksList, e]);
    }
  }

  function deleteTask(e) {
    setTasksList([...tasksList.slice(0, e), ...tasksList.slice(e + 1)]);
  }

  return (
    <div className={props.importance}>
      <h2 className="title">{title}</h2>
      <TodoForm importance={props.importance} onGetUserValue={addTask} />
      <div>
        {listOfTasks}
      </div>
    </div>
  )
}
