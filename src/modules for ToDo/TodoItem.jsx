import React, { useState } from "react";

export function TodoItem(props) {
  const [taskDone, setTaskDone] = useState('task');

  function handleChange() {
    if (taskDone == 'task') {
      setTaskDone('checked task')
    } else {
      setTaskDone('task')
    }
  }

  function deleteTask() {
    props.onDeleteTask(props.taskNumber);
  }

  return (
    <div className={taskDone}>
      <input type="checkbox" onChange={handleChange} />
      <p>{props.textTask}</p>
      <button className="delete" onClick={deleteTask}></button>
    </div>
  )
}
