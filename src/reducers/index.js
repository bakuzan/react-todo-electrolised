import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import theme from './theme'
import todos from './todos'

const rootReducer = combineReducers({
  routing,
  theme,
  todos
})

export default rootReducer
