export interface IPlaces {
	place: string,
	description: string,
	image: string,
	categories: Array<string>
}

export interface ICategories {
	name: string,
	image: string,
	numPlaces: number
}