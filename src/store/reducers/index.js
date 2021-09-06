import { combineReducers } from 'redux'
import {
	questions,
	questionsHasErrored,
	questionsIsLoading,
	questionsCount,
} from './questions'

export const rootReducer = combineReducers({
	questions,
	questionsHasErrored,
	questionsIsLoading,
	questionsCount,
})
