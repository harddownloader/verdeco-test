import { getAllQuestions } from '../api/questions'
import { INIT_QUESTIONS } from './actions/questions'

export const getQuestions = () => {
	return dispatch => {
		getAllQuestions()
			.then(questions => {
				dispatch({
					type: INIT_QUESTIONS,
					payload: questions,
				})
			})
			.catch(error => {
				console.error(error)
			})
	}
}
