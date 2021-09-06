import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionsSetAnsver } from '../store/actions/questions'
import { Button } from 'react-ui'
import './Action.scss'

class Action extends Component {
	render() {
		return (
			<>
				{!this.props.isLoading ? (
					<Button
						className='action_btn'
						onClick={() => this.props.questionsSetAnsver(this.props.name)}>
						{this.props.name}
					</Button>
				) : null}
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
		questionsSetAnsver: name => dispatch({ type: 'INCREASE', name: name }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Action)
