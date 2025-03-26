'use client'

import { useRouter } from 'next/navigation'
import styles from './dropDown.module.scss'
import Image from 'next/image'
import ProfileIcon from '@/assets/images/profileIcon.svg'
import LogoutIcon from '@/assets/images/logout-icon.svg'
import useLogout from '@/hooks/useLogout'


interface DropDownMenuProps {
	onItemClick?: () => void
}

const DropDownMenu = ({ onItemClick }: DropDownMenuProps) => {
	const router = useRouter()

	const logout = useLogout()

	const handleItemClick = (callback: () => void) => {
		if (onItemClick) {
			onItemClick()
		}
		callback()
	}

	const menuItems = [
		{
			icon: ProfileIcon,
			label: 'Мой профиль',
			onClick: () => handleItemClick(() => router.push('/profile')),
		},
		{
			icon: LogoutIcon,
			label: 'Выйти',
			onClick: () => handleItemClick(logout),
		},
	]

	return (
		<div className={styles.dropdownContainer}>
			<div className={styles.dropdown}>
				{menuItems.map(item => (
					<div
						key={item.label}
						className={styles.menuItem}
						onClick={item.onClick}
					>
						<Image
							src={item.icon}
							alt={item.label}
							width={18}
							height={18}
							className={styles.icon}
						/>
						<span>{item.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default DropDownMenu
