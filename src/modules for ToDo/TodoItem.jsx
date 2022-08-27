import React, { useState } from "react";

export function TodoItem({onDeleteTask, taskNumber, textTask}) {
  const [taskDone, setTaskDone] = useState('task');

  function handleChange() {
    if (taskDone == 'task') {
      setTaskDone('checked task')
    } else {
      setTaskDone('task')
    }
  }

  function deleteTask() {
    onDeleteTask(taskNumber);
  }

  return (
    <div className={taskDone}>
      <input type="checkbox" onChange={handleChange} />
      <p>{textTask}</p>
      <button className="delete" onClick={deleteTask}></button>
    </div>
  )
}
