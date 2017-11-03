import {ADD_TODO, TOGGLE_COMPLETE_TODO, REMOVE_TODO} from 'actions/todos'
import {getUserSettings, persistUserSettings} from 'utils/common'
import {createReducer} from './utils'



const initialState = {
  list: []
}

const getLocalState = () => {
  const settings = getUserSettings();

  if (!settings || !settings.todos) return initialState;
  return settings.todos;
}

const persistNewTodo = (state, action) => {
  const list = [
    ...state.list,
    { id: state.list.length + 1, isComplete: false, description: action.payload }
  ]
  return persistAndReturn(state, list)
}

const persistCompletionStatus = (state, action) => {
  const list = state.list.map(item => {
    if (item.id !== action.id) return item;
    return {...item, isComplete: !item.isComplete }
  })

  return persistAndReturn(state, list)
}

const persistUpdatedList = (state, action) => {
  const list = state.list.filter(x => x.id !== action.id)
  return persistAndReturn(state, list)
}

const persistAndReturn = (state, list) => {
  const updatedSettings = persistUserSettings({
    todos: { ...state, list }
  });
  return updatedSettings.todos;
}

const todos = createReducer(getLocalState(), {
  [ADD_TODO]      : persistNewTodo,
  [TOGGLE_COMPLETE_TODO] : persistCompletionStatus,
  [REMOVE_TODO] : persistUpdatedList
})

export default todos
