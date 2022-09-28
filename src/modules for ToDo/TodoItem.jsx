import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHighListTasks, changeLowListTasks} from "../redux/redux.js";

export function TodoItem({textTask, taskNumber, importance}) {
  const tasksList = importance === 'high'
      ? useSelector(state => state.toDoApp.highListTasks)
      : useSelector(state => state.toDoApp.lowListTasks);
  const dispatch = useDispatch();
  const [taskDone, setTaskDone] = useState('task');

  function handleChange() {
    if (taskDone === 'task') {
      setTaskDone('checked task')
    } else {
      setTaskDone('task')
    }
  }

  function deleteTask() {
    importance === 'high'
        ? dispatch(changeHighListTasks([...tasksList.slice(0, taskNumber), ...tasksList.slice(taskNumber + 1)]))
        : dispatch(changeLowListTasks([...tasksList.slice(0, taskNumber), ...tasksList.slice(taskNumber + 1)]));
  }

  return (
    <div className={taskDone}>
      <input type="checkbox" onChange={handleChange} />
      <p>{textTask}</p>
      <button className="delete" onClick={deleteTask}></button>
    </div>
  )
}
