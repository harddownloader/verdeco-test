import React, { Component } from 'react'
import { Alert } from 'react-ui'

class Done extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return <Alert variant='success'>{this.props.title}</Alert>
	}
}

export default Done
