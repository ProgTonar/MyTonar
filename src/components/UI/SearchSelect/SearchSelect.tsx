'use client'

import { useState, useEffect } from 'react'
import styles from './SearchSelect.module.scss'
import Image from 'next/image'
import ArrowDown from '@/assets/images/bottom-icon.svg'
import SearchIcon from '@/assets/images/search-icon.svg'
import Button from '../ButtonDefault/ButtonDefault'

interface SearchSelectProps {
	onSearch: (query: string, filter: string) => void
	onQueryChange: (query: string) => void
	onFilterChange: (filter: string) => void
	initialQuery?: string
	initialFilter?: string
}

const SearchSelect = ({
	onSearch,
	onQueryChange,
	onFilterChange,
	initialQuery = '',
	initialFilter = 'FIO',
}: SearchSelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectFilter, setSelectFilter] = useState<string>(initialFilter)
	const [placeholder, setPlaceholder] = useState(
		'Укажите фамилию, имя или отчество'
	)
	const [searchQuery, setSearchQuery] = useState(initialQuery)
	const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
		null
	)

	const filters = [
		{
			value: 'FIO',
			label: 'Поиск сотрудников по ФИО',
			placeholder: 'Укажите фамилию, имя или отчество',
		},
		{
			value: 'otdel',
			label: 'Поиск сотрудников по отделу',
			placeholder: 'Укажите название отдела',
		},
		{
			value: 'dolzhnost',
			label: 'Поиск сотрудников по должности',
			placeholder: 'Укажите должность сотрудника',
		},
	]

	const selectedFilter = filters.find(filter => filter.value === selectFilter)

	const handleSelect = (value: string) => {
		setSelectFilter(value)
		setIsOpen(false)
		onFilterChange(value)

		const selectedFilter = filters.find(filter => filter.value === value)
		if (selectedFilter) {
			setPlaceholder(selectedFilter.placeholder)
		}
	}

	const handleSearchClick = () => {
		if (searchQuery.trim()) {
			onSearch(searchQuery, selectFilter)
		}
	}

	const handleInputChange = (value: string) => {
		setSearchQuery(value)
		onQueryChange(value)

		// Отменяем предыдущий таймаут, если он есть
		if (typingTimeout) {
			clearTimeout(typingTimeout)
		}

		// Устанавливаем новый таймаут для поиска
		const newTimeout = setTimeout(() => {
			if (value.trim()) {
				onSearch(value, selectFilter)
			}
		}, 500) // Задержка 500мс после последнего ввода

		setTypingTimeout(newTimeout)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && searchQuery.trim()) {
			event.preventDefault()
			handleSearchClick()
		}
	}

	useEffect(() => {
		if (initialFilter) {
			setSelectFilter(initialFilter)
			const filter = filters.find(f => f.value === initialFilter)
			if (filter) {
				setPlaceholder(filter.placeholder)
			}
		}
	}, [initialFilter])

	useEffect(() => {
		if (initialQuery) {
			setSearchQuery(initialQuery)
			onSearch(initialQuery, selectFilter)
		}
	}, [initialQuery])

	// Очистка таймаута при размонтировании компонента
	useEffect(() => {
		return () => {
			if (typingTimeout) {
				clearTimeout(typingTimeout)
			}
		}
	}, [typingTimeout])

	return (
		<div className={styles.section}>
			<div className={styles.selectSection}>
				<div
					className={`${styles.select} ${isOpen ? styles.open : ''}`}
					onClick={e => {
						e.stopPropagation()
						setIsOpen(!isOpen)
					}}
				>
					<Image src={SearchIcon} alt='Search' width={16} height={16} />
					<span>{selectedFilter?.label || 'Не выбрано'}</span>
					<Image
						src={ArrowDown}
						alt='Arrow'
						width={16}
						height={16}
						className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
					/>
				</div>
				{isOpen && (
					<div className={styles.dropdown}>
						{filters.map(filter => (
							<div
								key={filter.value}
								className={`${styles.option} ${
									selectFilter === filter.value ? styles.selected : ''
								}`}
								onClick={() => handleSelect(filter.value)}
							>
								{filter.label}
							</div>
						))}
					</div>
				)}
			</div>
			<div className={styles.sectionInput}>
				<input
					type='text'
					className={styles.searchInput}
					placeholder={placeholder}
					value={searchQuery}
					onChange={e => handleInputChange(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<div className={styles.sectionButton}>
				<Button onClick={handleSearchClick}>Найти</Button>
			</div>
		</div>
	)
}

export default SearchSelect
