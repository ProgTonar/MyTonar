export interface Stop {
	id: number
	coordinate: [number, number]
	name: string
	arrivalTime?: string
}

export interface Route {
	id: number
	value: string
	nameStart: string
	nameEnd: string
	start: [number, number]
	end: [number, number]
	stops: Stop[]
}

export const busRoutes: Route[] = [
	{
		id: 1,
		value: 'Маршрут №1',
		nameStart: 'Орехово-Зуево, ул. Парковская',
		nameEnd: 'Завод "Тонар"',
		start: [55.820455, 38.999532],
		end: [55.707774397287785, 39.10465398650744],
		stops: [
			{
				id: 1,
				coordinate: [55.738798022272356, 38.9438779989094],
				name: 'Проходная завода',
				arrivalTime: '07:30',
			},
			{
				id: 2,
				coordinate: [55.72777804150696, 38.958179537217795],
				name: 'ул. Советская',
				arrivalTime: '07:35',
			},
			{
				id: 3,
				coordinate: [55.72615883747758, 38.97549587856899],
				name: 'Площадь Ленина',
				arrivalTime: '07:40',
			},
		],
	},
	{
		id: 2,
		value: 'Маршрут №2',
		nameStart: 'Орехово-Зуево, Маяк',
		nameEnd: 'Завод "Тонар"',
		start: [55.80653470110852, 38.96175357194959],
		end: [55.707774397287785, 39.10465398650744],
		stops: [
			{
				id: 4,
				coordinate: [55.77705140453909, 38.96278354226197],
				name: 'Проходная завода',
				arrivalTime: '08:00',
			},
			{
				id: 5,
				coordinate: [55.75145861692373, 38.933429447479284],
				name: 'Торговый центр',
				arrivalTime: '08:10',
			},
		],
	},
]
