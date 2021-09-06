import React, { Component } from 'react'
import Quiz from './components/Quiz'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<>
				<Quiz />
			</>
		)
	}
}

export default App
