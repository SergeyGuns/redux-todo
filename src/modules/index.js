import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import todo from './todo'

export default combineReducers({
  routing: routerReducer,
  counter,
  todo
})