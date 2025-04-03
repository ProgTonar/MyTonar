export interface IRoute {
	id: number
	title: string
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
	arrival_time: string
	bus_navigation_id: number
}

export interface INews {
	id: number
	title_one: string
	title_two: string
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


export interface IUser {
	login: string
	last_name: string
	first_name: string
	middle_name: string
	email: string
	phone: string
	roles: string[]
	permissions: string[]
	active: boolean
}


export interface IRole {
	id: number
	name: string
	guard_name: string
	permissions: string[]
}


export interface IPermission {
	id?: number;
	name?: string;
	guard_name?: string;
	created_at?: string;
	updated_at?: string;
	pivot?: any;
  }



  export interface IContacts {
	id: number;
	name?: string;
	job_title?: string
	v_phonenumber?: string
	short_phonenumber?: string
	mobile_phone?: string
	email?: string
  }
