export interface IRoute {
	id: number
	titles: string
	nameStart: string
	nameEnd: string
	dotsStart: { dotX: number; dotY: number }
	dotsEnd: { dotX: number; dotY: number }
	stops: IStop[]
}

export interface IStop {
	id: number
	name: string
	coordinate: { dotX: number; dotY: number }
	arrivalTime: string
}

export interface INews {
	id: number
	title_one: string
	title_two?: string
	imageSrc: string
	imageContent?: string
	content: string
	image_url: string
    date: string
    description: string
}

export interface IOneNew {
    id: number
	title_one: string
	title_two?: string
	imageSrc: string
	imageContent?: string
	content: string
	image_url: string
    date: string
    description: string
}


export interface IProperty {
	nomenclature: string
	code: string
	quanity: number
	date: string
}
