import './styles/index.css'
import '@fontsource-variable/space-grotesk'

import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import queryClient from './lib/reactQuery/queryClient'

const root = ReactDOM.createRoot(
	document.getElementById('reactMountPoint') as HTMLElement,
)
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>,
)
