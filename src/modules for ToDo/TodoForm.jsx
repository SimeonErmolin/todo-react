import React, { useState } from "react";

export function TodoForm({importance, onGetUserValue}) {
  const [textTask, setTextTask] = useState('');
  const inputPlaceholder = importance == 'high' ? 'Добавить важных дел' : 'Добавить';

  function taskChange(e) {
    setTextTask(e.target.value);
  }

  function sendForm(e) {
    e.preventDefault();
    onGetUserValue(textTask);
    setTextTask('');
  }

  return (
    <form className="form " onSubmit={sendForm}>
        <input type="text" placeholder={inputPlaceholder} className="field" value={textTask} onChange={taskChange} />
        <input type="submit" className="btn" value="" />
    </form>
  )
}
