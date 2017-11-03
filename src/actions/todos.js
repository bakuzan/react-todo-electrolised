
export const ADD_TODO = "ADD_TODO"
export const addTodo = payload => ({ type: ADD_TODO, payload })

export const TOGGLE_COMPLETE_TODO = "TOGGLE_COMPLETE_TODO"
export const toggleCompleteTodo = id => ({ type: TOGGLE_COMPLETE_TODO, id })

export const REMOVE_TODO = "REMOVE_TODO"
export const removeTodo = id => ({ type: REMOVE_TODO, id })
