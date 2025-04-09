import type { Meta, StoryObj } from '@storybook/react'

import { apiEnergy } from '../../utils/mocks/apiMock'
import { BarChartSection } from './BarChartSection'

const meta = {
	title: 'Style System/Bar Chart',
	component: BarChartSection,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	args: { data: apiEnergy.data.generationmix },
} satisfies Meta<typeof BarChartSection>

export default meta
type Story = StoryObj<typeof meta>

export const Principal: Story = {}
