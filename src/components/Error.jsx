import React, { Component } from 'react'
import { Alert } from 'react-ui'

class Error extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return <Alert variant='warning'>{this.props.title}</Alert>
	}
}

export default Error
