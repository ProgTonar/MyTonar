'use client'

import styles from './SelectNavigate.module.scss'
import Image from 'next/image'
import ArrowDown from '@/assets/images/bottom-icon.svg'
import ArrowRoute from '@/assets/images/Arrow-route.svg'
import { useState } from 'react'

interface Option {
	value: number | string
	label: string
	from: string
	to: string
}

interface SelectNavigateProps {
	options: Option[]
	onChange: (value: any) => void
	placeholder?: string
	value?: Option | null
}

const RoutePoint = ({ text }: { text: string }) => (
	<div className={styles.routePoint}>
		<div className={styles.circle} />
		<div>{text}</div>
	</div>
)

const SelectNavigate = ({
	options,
	onChange,
	placeholder,
	value,
}: SelectNavigateProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleSelect = (option: Option) => {
		onChange(option.value)
		setIsOpen(false)
	}

	const RouteDisplay = ({ from, to }: { from: string; to: string }) => (
		<div className={styles.routeDisplay}>
			<RoutePoint text={from} />
			<Image
				src={ArrowRoute}
				alt='to'
				width={16}
				height={16}
				className={styles.routeArrow}
			/>
			<RoutePoint text={to} />
		</div>
	)

	return (
		<div className={styles.selectContainer}>
			<div
				className={`${styles.select} ${isOpen ? styles.open : ''}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={styles.selectedValue}>
					{value ? (
						<RouteDisplay from={value.from} to={value.to} />
					) : (
						<span className={styles.placeholder}>{placeholder}</span>
					)}
				</div>
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
					{options.map(option => (
						<div
							key={option.value}
							className={`${styles.option} ${
								value?.value === option.value ? styles.selected : ''
							}`}
							onClick={() => handleSelect(option)}
						>
							<RouteDisplay from={option.from} to={option.to} />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SelectNavigate
