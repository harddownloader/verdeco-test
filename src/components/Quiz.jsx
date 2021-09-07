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
import Footer from './Footer'
import './Quiz.scss'

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchData()
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

	getCoutnQuestions(questions) {
		let counter = 0
		questions.forEach(question => {
			if (question.GroupId) counter++
		})
		return counter
	}

	getCountUserAnswers(questions, userAnswers) {
		let counter = 0
		for (let i = 0; i < userAnswers; i++) {
			if (questions[i].GroupId) counter++
		}
		return counter
	}

	render() {
		const hasQuiz = this.props.questions.hasOwnProperty('Quiz')
		const quizHeading = hasQuiz ? this.props.questions.Quiz.Name : null
		const questions = hasQuiz ? this.props.questions.Quiz.Questions : null
		const questionsQta = hasQuiz ? questions.length - 1 : null
		const isLimitOut = () => {
			if (hasQuiz && this.props.questionNumber > questionsQta) {
				return true
			}
			return false
		}
		const currentQuestion =
			hasQuiz && !isLimitOut()
				? questions[this.props.questionNumber].QuestionText
				: null
		const isLastQuestion = () => {
			if (hasQuiz && this.props.questionNumber === questionsQta) {
				return true
			}
			return false
		}

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
													// yourAnsvers={this.props.questionNumber}
													// totalQuestions={questionsQta + 1}
													yourAnsvers={this.getCountUserAnswers(
														questions,
														this.props.questionNumber,
													)}
													totalQuestions={this.getCoutnQuestions(questions) + 1}
												/>
												<Stack
													direction='vertical'
													align='center'
													className='question'>
													<Text size={4} align='center'>
														{currentQuestion}
													</Text>
												</Stack>

												{/* Buttons */}
												<Stack direction='vertical' align='center'>
													<Actions
														isUserChoice={
															questions[this.props.questionNumber].GroupId
														}
														isLastQuestion={isLastQuestion()}
													/>
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
				<Footer />
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
		fetchData: () => dispatch(questionsFetchData()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
