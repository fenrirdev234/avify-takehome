import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { BarChartSection } from './components/chart/barChart'
import { PieChartSection } from './components/chart/pieChart'
import { getEnergies } from './services/energy.services'

export const App = () => {
	const { data } = useQuery({
		queryKey: ['energy'],
		queryFn: getEnergies,
	})

	return (
		<main className='relative min-h-screen w-full bg-[#f2f1ee] px-4 py-5 antialiased'>
			<header className='flex justify-center pb-10'>
				<h1
					className='rounded-2xl bg-[#e96e3a] px-4 py-5 text-center text-6xl font-semibold text-[#1a1a1a]'
					style={{ boxShadow: '0px 16px 25px 0px rgba(255, 143, 96, 0.4)' }}
				>
					UK Energy Mix
				</h1>
			</header>
			{data && (
				<section className='flex flex-col justify-center gap-8'>
					<article className='w-full max-w-[960px] rounded-3xl border-2 border-[#7f7f7f] bg-[#fdf1e9] p-4'>
						<BarChartSection data={data.generationmix} />
					</article>
					<article className='w-full max-w-[960px] rounded-3xl border-2 border-[#7f7f7f] bg-[#fdf1e9] p-4'>
						<PieChartSection data={data.generationmix} />
					</article>
				</section>
			)}
		</main>
	)
}
