import './styles/index.css'
import '@fontsource-variable/space-grotesk'

import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app'
import queryClient from './lib/reactQuery/queryClient'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>,
		document.getElementById('reactMountPoint'),
	)
})
