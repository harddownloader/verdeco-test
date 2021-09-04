import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { questionsFetchData } from '../store/actions/questions'

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchData(
			'https://gtiw.gtinvest.com:44300/api/QuizPassings/GetById?passingId=D4FCA825-9E5C-400E-B653-E37581262524',
		)
	}

	render() {
		return (
			<>
				<h1>Quiz</h1>
				{this.props.questions.hasOwnProperty('Quiz')
					? this.props.questions.Quiz.Questions.map(question => {
							return <p key={uuidv4()}>{question.QuestionText}</p>
					  })
					: null}
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		questions: state.questions,
		hasErrored: state.questionsHasErrored,
		isLoading: state.questionsIsLoading,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: url => dispatch(questionsFetchData(url)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
