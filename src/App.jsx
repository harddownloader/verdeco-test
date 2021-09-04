import React, { Component } from 'react'
import Quiz from './components/Quiz'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {}

	// componentDidUpdate() {}

	render() {
		return (
			<>
				<h1>Hello World</h1>
				<Quiz />
			</>
		)
	}
}

export default App
