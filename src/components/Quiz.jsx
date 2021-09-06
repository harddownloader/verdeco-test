import React, { Component } from 'react'
import { connect } from 'react-redux'

import { questionsFetchData } from '../store/actions/questions'
import { Grid, Column, Stack, Card, Text } from 'react-ui'
import QuizHeading from './QuizHeading'
import QuizInfo from './QuizInfo'
import Actions from './Actions'
import Done from './Done'
import Loader from './Loader'
import Error from './Error'

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchData(
			'https://gtiw.gtinvest.com:44300/api/QuizPassings/GetById?passingId=D4FCA825-9E5C-400E-B653-E37581262524',
		)
	}

	isUserAnsweredAllQuestions() {
		if (
			this.props.questions.hasOwnProperty('Quiz') &&
			this.props.questionNumber > this.props.questions.Quiz.Questions.length
		) {
			return true
		}
		return false
	}

	render() {
		const hasQuiz = this.props.questions.hasOwnProperty('Quiz')
		const quizHeading = hasQuiz ? this.props.questions.Quiz.Name : null
		const questionsQta = hasQuiz
			? this.props.questions.Quiz.Questions.length - 1
			: null
		const isLimitOut = () => {
			if (hasQuiz && this.props.questionNumber > questionsQta) {
				return true
			}
			return false
		}
		const currentQuestion =
			hasQuiz && !isLimitOut()
				? this.props.questions.Quiz.Questions[this.props.questionNumber]
						.QuestionText
				: null

		return (
			<>
				<Grid>
					<Column start={5} end={8}>
						<Stack direction='vertical' justify='center' align='center' gap={8}>
							<QuizHeading quizHeading={quizHeading} />
							{/* Loader */}
							{this.props.isLoading && !this.props.hasErrored ? (
								<Loader />
							) : null}
							{/* Error */}
							{this.props.hasErrored ? (
								<Error title='Нет вопросов' />
							) : hasQuiz && !this.props.isLoading && !isLimitOut() ? (
								// Quiz
								<Card>
									<Stack justify='center'>
										<Stack direction='vertical' gap={8} align='center'>
											<>
												{/* Question */}
												<QuizInfo
													yourAnsvers={this.props.questionNumber}
													totalQuestions={questionsQta + 1}
												/>
												<Stack
													direction='vertical'
													align='center'
													css={{ paddingX: 8 }}>
													<Text size={4} align='center'>
														{currentQuestion}
													</Text>
												</Stack>

												{/* Buttons */}
												<Stack direction='vertical' align='center'>
													<Actions />
												</Stack>
											</>
										</Stack>
									</Stack>
								</Card>
							) : null}
							{/* End Message */}
							{hasQuiz && isLimitOut() ? (
								<Done title='Спасибо за ваши ответы!' />
							) : null}
						</Stack>
					</Column>
				</Grid>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		questions: state.questions,
		hasErrored: state.questionsHasErrored,
		isLoading: state.questionsIsLoading,
		questionNumber: state.questionsCount,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: url => dispatch(questionsFetchData(url)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
