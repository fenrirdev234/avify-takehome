import React from 'react'
import {
	Bar,
	BarChart,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

import { IGenerationmix } from '../../../models/energy.model'
import { getColorChart } from '../../../utils/getColorChart'

interface IBarChartSectionProps {
	data: IGenerationmix[]
}

export const BarChartSection = ({ data }: IBarChartSectionProps) => {
	return (
		<ResponsiveContainer width={'100%'} height={50 * data.length} debounce={100}>
			<BarChart data={data} layout='vertical'>
				<YAxis
					yAxisId={0}
					axisLine={false}
					tickLine={false}
					dataKey='fuel'
					type='category'
				/>
				<YAxis
					yAxisId={1}
					orientation='right'
					dataKey='perc'
					type='category'
					axisLine={false}
					tickLine={false}
				/>
				<XAxis dataKey='perc' type='number' axisLine={false} tickLine={false} />
				<Tooltip />

				<Bar minPointSize={2} barSize={32} dataKey='perc' fill='#323232'>
					{data.map((entry, index) => {
						return <Cell key={index} fill={getColorChart(data.length, index)} />
					})}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	)
}
