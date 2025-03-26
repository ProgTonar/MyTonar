'use client'

import styles from './BlockPhone.module.scss'

interface Phone {
	name: string
	number: string
}

interface BlockPhoneProps {
	phones: Phone[]
	title: string
	icon: React.ReactNode
}

const BlockPhone = ({ phones, title, icon }: BlockPhoneProps) => {
	return (
		<div className={styles.section}>
			<div className={styles.header}>{title}</div>
			{icon && <div className={styles.icon}>{icon}</div>}
			<ul>
				{phones?.map((phone, index) => (
					<div key={index}>
						<span>{phone.name}</span>
						<li>{phone.number}</li>
					</div>
				))}
			</ul>
		</div>
	)
}

export default BlockPhone
