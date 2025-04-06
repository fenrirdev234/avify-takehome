export interface IEnergy {
	data: IData
}

export interface IData {
	from: string
	to: string
	generationmix: IGenerationmix[]
}

export interface IGenerationmix {
	fuel: string
	perc: number
}
