import { combineReducers } from 'redux'
import { questions, questionsHasErrored, questionsIsLoading } from './questions'

export const rootReducer = combineReducers({
	questions,
	questionsHasErrored,
	questionsIsLoading,
})
