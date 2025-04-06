import axios from 'axios'

import { IEnergy } from '../models/energy.model'

const API_ENDPOINTS = 'https://api.carbonintensity.org.uk/generation'

export const energyAxios = axios.create({
	baseURL: API_ENDPOINTS,
	timeout: 150000000,
})

export const getEnergies = async () => {
	const res = await energyAxios.get<IEnergy>('/')

	return res.data.data
}
