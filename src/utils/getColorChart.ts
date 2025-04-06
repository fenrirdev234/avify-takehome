import { chartColors } from '../constants/chartColors'

export const getColorChart = (length: number, index: number) => {
	if (length <= chartColors.length) {
		return chartColors[length - 1][index]
	}

	return chartColors[chartColors.length - 1][index % chartColors.length]
}
