import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import { IGenerationmix } from '../../models/energy.model'
import { getColorChart } from '../../utils/getColorChart'
interface IPieChartSectionProps {
	data: IGenerationmix[]
}
export const PieChartSection = ({ data }: IPieChartSectionProps) => {
	return (
		<ResponsiveContainer width={'100%'} height={50 * data.length} debounce={100}>
			<PieChart data={data} layout='vertical'>
				<Tooltip />
				<Pie data={data} dataKey='perc' nameKey='fuel' label>
					{data.map((entry, index) => {
						return <Cell key={index} fill={getColorChart(data.length, index)} />
					})}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	)
}
