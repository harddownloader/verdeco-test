import React, { Component } from 'react'
import { Heading } from 'react-ui'
import './QuizHeading.scss'

class Loader extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<Heading className='heading' size='page'>
					Quiz
				</Heading>
				<Heading className='heading' size='section'>
					{this.props.quizHeading}
				</Heading>
			</>
		)
	}
}

export default Loader
