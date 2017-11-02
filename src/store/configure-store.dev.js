import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux';
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


const configureStore = (history, preloadedState) => {
  const middlewares = [routerMiddleware(history), logger]

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
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
