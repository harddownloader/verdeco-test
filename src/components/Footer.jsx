import React, { Component } from 'react'
import { Text, Link } from 'react-ui'
import './Footer.scss'

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<Text>
					created by{' '}
					<Link href='https://github.com/harddownloader/' target='_blank'>
						@harddownloader
					</Link>
				</Text>
			</footer>
		)
	}
}

export default Footer
