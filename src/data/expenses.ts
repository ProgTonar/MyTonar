
export interface ExpensesItem {
	title: string;
    date: string;
    totalSum: string;
    onClick: () => void;
    disabled: boolean;
}

export const ExpensesData: ExpensesItem[] = [
	{
		title: 'Расходы',
		date: '01.01.2025',
		disabled: false,
		onClick: () => {},
		totalSum: '1289',
	},
	
]