import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Stack } from 'react-ui'

import Action from './Action'
import './Actions.scss'

class Actions extends Component {
	constructor(props) {
		super(props)
		this.state = {
			buttonRows: new Array(2).fill(0),
			buttonsInRow: new Array(2).fill(0),
			buttons: [
				'Отлично',
				'Хорошо',
				'Удовлетворительно',
				'Неудовлетворительно',
			],
			actionBlock: [],
			countBtn: 0,
		}
	}

	getActionBlock() {
		let ActionsBlock = []
		this.state.buttonRows.forEach(() => {
			ActionsBlock.push(
				<Stack key={uuidv4()} gap={4} className='action_wrap'>
					{this.getActionRow()}
				</Stack>,
			)
		})

		return ActionsBlock
	}

	getActionRow() {
		let result = []
		this.state.buttonsInRow.forEach(() => {
			this.setState(state => {
				result.push(
					<Action key={uuidv4()} name={this.state.buttons[state.countBtn]} />,
				)
				return { countBtn: state.countBtn + 1 }
			})
		})
		return result
	}

	componentDidMount() {
		this.setState({ actionBlock: this.getActionBlock() })
	}

	render() {
		return (
			<>
				<Stack align='center' direction='vertical' gap={4}>
					{this.state.actionBlock}
				</Stack>
			</>
		)
	}
}

export default Actions
