import {typesOfActions} from "./actions.js";
import {combineReducers} from "redux";

function highListOfTasks(state = [], action) {
    switch (action.type) {
        case typesOfActions.CHANGE_HIGH_LIST_TASKS:
            return action.highListOfTasks
        default:
            return state
    }
}

function lowListOfTasks(state = [], action) {
    switch (action.type) {
        case typesOfActions.CHANGE_LOW_LIST_TASKS:
            return action.lowListOfTasks
        default:
            return state
    }
}

export const todoApp = combineReducers({
    highListOfTasks,
    lowListOfTasks,
})

