'use client'

import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.loader}>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
			</div>
		</div>
	)
}

export default Loader
