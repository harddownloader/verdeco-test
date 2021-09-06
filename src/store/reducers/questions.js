const initialState = {
	hasErrored: false,
	count: 0,
	isLoading: true,
	questions: [],
}

export function questionsHasErrored(state = initialState, action) {
	switch (action.type) {
		case 'QUESTIONS_HAS_ERRORED':
			return action.hasErrored

		default:
			return state
	}
}

export function questionsIsLoading(state = initialState, action) {
	switch (action.type) {
		case 'QUESTIONS_IS_LOADING':
			return action.isLoading

		default:
			return state
	}
}

export function questions(state = initialState, action) {
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
