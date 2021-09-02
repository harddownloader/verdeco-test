import { createStore, combineReducers } from 'redux'
import { quiz } from './reducers'

const store = createStore(combineReducers({ quiz }))

export default store
