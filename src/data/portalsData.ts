export interface PortalItem {
	title: string
	description: string
	disabled: boolean
	icon: string
	path: string
}

export const portalsData: PortalItem[] = [
	{
		title: 'Интерактивная карта оборудования',
		description: '',
		disabled: false,
		icon: '',
		path: '/',
	},
	{
		title: 'Корпоративные документы',
		description: '',
		disabled: false,
		icon: '',
		path: '/',
	},
	{
		title: 'Гарантийный портал',
		description: '',
		disabled: false,
		icon: '',
		path: '/',
	},
	{
		title: 'УМТС',
		description: 'В разработке',
		disabled: true,
		icon: '',
		path: '/',
	},
]
