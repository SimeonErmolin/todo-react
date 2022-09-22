import React from "react";
import {useSelector} from "react-redux";
import {TodoItem} from "./TodoItem.jsx";

export function ListOfTodos({importance}) {
    const tasksList = importance === 'high'
        ? useSelector(state => state.highListOfTasks)
        : useSelector(state => state.lowListOfTasks);

    const listOfTasks = tasksList.map((item, index) => {
        return <TodoItem key={item.toString()} textTask={item} taskNumber={index} importance={importance} />
    })

    return (
        <div>
            {listOfTasks}
        </div>
    )
}