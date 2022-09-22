 export const typesOfActions = {
     CHANGE_HIGH_LIST_TASKS: 'CHANGE_HIGH_LIST_TASKS',
     CHANGE_LOW_LIST_TASKS: 'CHANGE_LOW_LIST_TASKS',
}

export function highListTask(highListOfTasks) {
    return {
        type: typesOfActions.CHANGE_HIGH_LIST_TASKS,
        highListOfTasks
    }
}

 export function lowListTask(lowListOfTasks) {
     return {
         type: typesOfActions.CHANGE_LOW_LIST_TASKS,
         lowListOfTasks
     }
 }