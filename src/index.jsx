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
// react ui
import { ThemeProvider } from 'react-ui'
import { tokens, components } from 'react-ui/themes/light'

// overwrite spinner styles
components.Spinner = {
	sizes: { small: 2, medium: 4, large: 6 },
	borderColor: 'greens.800',
	borderLeftColor: 'greens.500',
}

const rootElement = document.getElementById('root')

const store = configureStore()

render(
	<Provider store={store}>
		<ThemeProvider tokens={tokens} components={components}>
			<App store={store} />
		</ThemeProvider>
	</Provider>,
	rootElement,
)
