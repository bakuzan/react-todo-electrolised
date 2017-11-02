import { createStore, applyMiddleware } from 'redux'

import {createLogger} from 'redux-logger'
import rootReducer from 'reducers'


const logger = createLogger({
  colors: {
    title: () => "blue",
    prevState: () => "black",
    action: () => "magenta",
    nextState: () => "green",
    error: () => "red"
  },
  collapsed: (getState, action) => action.type === "SET_THEME_CLASS"
})


const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
