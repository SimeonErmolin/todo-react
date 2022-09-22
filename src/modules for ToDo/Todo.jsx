import React from "react";
import { TodoForm } from "./TodoForm";
import {ListOfTodos} from "./ListOfTodos";

export function Todo({importance}) {
  const title = importance === 'high' ? 'HIGH' : 'LOW';

  return (
    <div className={importance}>
      <h2 className="title">{title}</h2>
      <TodoForm importance={importance} />
      <ListOfTodos importance={importance} />
    </div>
  )
}