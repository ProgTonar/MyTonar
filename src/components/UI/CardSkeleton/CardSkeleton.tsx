"use client";

import styles from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.avatar}></div>
      <div className={styles.content}>
        <div className={styles.name}></div>
        <div className={styles.info}>
          <div className={styles.text}></div>
          <div className={styles.text}></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
