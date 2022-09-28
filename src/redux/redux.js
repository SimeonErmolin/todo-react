import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    highListTasks: [],
    lowListTasks: [],
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        changeHighListTasks(state, action) {
            state.highListTasks = action.payload
        },
        changeLowListTasks(state, action) {
            state.lowListTasks = action.payload
        }
    }
})

export const {changeHighListTasks, changeLowListTasks} = toDoSlice.actions
export default toDoSlice.reducer