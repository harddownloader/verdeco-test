import React, { Component } from 'react'
import { Text } from 'react-ui'

class QuizInfo extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Text>
				{this.props.yourAnsvers}/{this.props.totalQuestions} ответов
			</Text>
		)
	}
}

export default QuizInfo
