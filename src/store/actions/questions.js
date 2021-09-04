export function questionsHasErrored(bool) {
	return {
		type: 'QUESTIONS_HAS_ERRORED',
		hasErrored: bool,
	}
}

export function questionsIsLoading(bool) {
	return {
		type: 'QUESTIONS_IS_LOADING',
		isLoading: bool,
	}
}

export function questionsFetchDataSuccess(questions) {
	return {
		type: 'QUESTIONS_FETCH_DATA_SUCCESS',
		questions,
	}
}

export function questionsFetchData(url) {
	return dispatch => {
		dispatch(questionsIsLoading(true))

		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				dispatch(questionsIsLoading(false))

				return response
			})
			.then(response => response.json())
			.then(questions => {
				console.log('questions', questions)
				return dispatch(questionsFetchDataSuccess(questions))
			})
			.catch(() => dispatch(questionsHasErrored(true)))
	}
}
