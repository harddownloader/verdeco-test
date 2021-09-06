import React, { Component } from 'react'
import { connect } from 'react-redux'

import { questionsFetchData } from '../store/actions/questions'
import { Grid, Column, Heading, Stack, Card, Text } from 'react-ui'
import Actions from './Actions'
import './Quiz.scss'

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchData(
			'https://gtiw.gtinvest.com:44300/api/QuizPassings/GetById?passingId=D4FCA825-9E5C-400E-B653-E37581262524',
		)
	}

	render() {
		return (
			<>
				<Grid>
					<Column start={5} end={8}>
						<Stack direction='vertical' gap={8}>
							<Heading className='heading'>Quiz</Heading>
							<Card>
								<Stack justify='center'>
									<Stack direction='vertical' gap={8} align='center'>
										<Stack
											direction='vertical'
											align='center'
											css={{ paddingX: 8 }}>
											<Text size={4}>
												{this.props.questions.hasOwnProperty('Quiz')
													? this.props.questions.Quiz.Questions[
															this.props.questionNumber
													  ].QuestionText
													: null}
											</Text>
										</Stack>

										<Stack direction='vertical' align='center'>
											<Actions />
										</Stack>
									</Stack>
								</Stack>
							</Card>
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
