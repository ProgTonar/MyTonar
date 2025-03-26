export interface EmergencyBlock {
	title: string
	icon: string
	phones: {
		name: string
		number: string
	}[]
}

export interface EmergencyData {
	mainBlocks: EmergencyBlock[]
	securityBlock: EmergencyBlock
}

export const emergencyData: EmergencyData = {
	mainBlocks: [
		{
			title: 'Здравпункт',
			icon: 'health',
			phones: [{ name: 'Мобильный телефон', number: '+7 (968) 726-10-25' }],
		},
		{
			title: 'Пожарная безопасность',
			icon: 'fire',
			phones: [{ name: 'Мобильный телефон', number: '+7 (968) 726-10-25' }],
		},
		{
			title: 'Дежурный электрик',
			icon: 'flash',
			phones: [
				{ name: 'Мобильный телефон', number: '+7 (968) 726-10-25' },
				{ name: 'Короткий номер', number: '406' },
			],
		},
		{
			title: 'Котельная',
			icon: 'temperature',
			phones: [{ name: 'Мобильный телефон', number: '+7 (968) 726-10-25' }],
		},
	],
	securityBlock: {
		title: 'Охрана',
		icon: 'shield',
		phones: [
			{ name: 'Мобильный телефон', number: '+7 (968) 726-10-25' },
			{ name: 'Вышка:', number: '+7 (968) 726-10-25' },
			{ name: 'Озеро:', number: '+7 (968) 726-10-25' },
			{ name: 'ГП:', number: '+7 (968) 726-10-25' },
			{ name: 'ПМК:', number: '+7 (968) 726-10-25' },
			{ name: 'Муравей:', number: '+7 (968) 726-10-25' },
			{ name: 'Въездные ворота (завод)', number: '+7 (968) 726-10-25' },
			{ name: 'ВЗУ:', number: '+7 (968) 726-10-25' },
			{ name: 'Ожерелки:', number: '+7 (968) 726-10-25' },
			{ name: 'Сопово:', number: '+7 (968) 726-10-25' },
		],
	},
}
