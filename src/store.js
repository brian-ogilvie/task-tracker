import { createStore } from 'redux'
import rootReducer from './reducers'

const defaultState = {
  user: "Brian"
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__())

export default store