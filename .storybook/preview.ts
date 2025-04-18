import '../src/styles/index.css'
import '@fontsource-variable/space-grotesk'

import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize()

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	loaders: [mswLoader],
}

export default preview
