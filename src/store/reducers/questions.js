export function questionsHasErrored(state = false, action) {
	switch (action.type) {
		case 'QUESTIONS_HAS_ERRORED':
			return true

		default:
			return state
	}
}

export function questionsIsLoading(state = true, action) {
	switch (action.type) {
		case 'QUESTIONS_IS_LOADING':
			return action.isLoading

		default:
			return state
	}
}

export function questions(state = [], action) {
	switch (action.type) {
		case 'QUESTIONS_FETCH_DATA_SUCCESS':
			return action.questions

		default:
			return state
	}
}

export function questionsCount(state = 0, action) {
	switch (action.type) {
		case 'INCREASE':
			return state + 1
		default:
			return state
	}
}
