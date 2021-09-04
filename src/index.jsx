// babel - https://babeljs.io/docs/en/babel-polyfill
import 'core-js'
import 'regenerator-runtime/runtime'
// react
import React from 'react'
import { render } from 'react-dom'
// redux
import { Provider } from 'react-redux'
import configureStore from '@/store/configureStore'
// components
import App from '@/App'
// styles
import '@/assets/scss/index.scss'

const rootElement = document.getElementById('root')

const store = configureStore()

render(
	<Provider store={store}>
		<App store={store} />
	</Provider>,
	rootElement,
)
