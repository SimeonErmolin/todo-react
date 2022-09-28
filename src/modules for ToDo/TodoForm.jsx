import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {changeHighListTasks, changeLowListTasks} from "../redux/redux.js";

export function TodoForm({importance}) {
  const dispatch = useDispatch();
  const tasksList = importance === 'high'
      ? useSelector(state => state.toDoApp.highListTasks)
      : useSelector(state => state.toDoApp.lowListTasks);

  const [textTask, setTextTask] = useState('');
  const inputPlaceholder = importance === 'high' ? 'Добавить важных дел' : 'Добавить';

  function taskChange(e) {
    setTextTask(e.target.value);
  }

  function addTask(e) {
    e.preventDefault();

    if (textTask === '') return;
    if (tasksList.some(task => textTask === task) === true) {
      alert('Такая заметка уже существует!');
    } else {
      importance === 'high'
          ? dispatch(changeHighListTasks([...tasksList, textTask]))
          : dispatch(changeLowListTasks([...tasksList, textTask]))
    }
    setTextTask('');
  }

  return (
    <form className="form " onSubmit={addTask}>
        <input type="text" placeholder={inputPlaceholder} className="field" value={textTask} onChange={taskChange} />
        <input type="submit" className="btn" value="" />
    </form>
  )
}
