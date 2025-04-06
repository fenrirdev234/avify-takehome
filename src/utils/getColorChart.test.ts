import { getColorChart } from './getColorChart'

describe('getColorChart', () => {
	it('should return the correct color for a given length and index', () => {
		const length = 5
		const index = 2
		const expectedColor = '#f2c625'
		const result = getColorChart(length, index)
		expect(result).toBe(expectedColor)
	})

	it('should return the correct color for a length greater than chartColors', () => {
		const length = 23
		const index = 20
		const expectedColor = '#13bd74'
		const result = getColorChart(length, index)

		expect(result).toBe(expectedColor)
	})
})
