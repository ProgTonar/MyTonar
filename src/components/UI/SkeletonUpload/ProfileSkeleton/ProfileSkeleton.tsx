"use client";

import styles from "./Skeleton.module.scss";

export const ProfileSkeleton = () => {
  return (
    <div className={styles.content}>
      {/* Шапка с кнопкой назад */}
      <div className={styles.profile__header}>
        <div>
          <div className={styles.skeletonButton}></div>
        </div>
        <div className={styles.profile__title}>
          <div className={styles.skeletonTitle}></div>
        </div>
      </div>

      {/* Основное содержимое */}
      <div className={styles.profile__content}>
        {/* Блок с аватаром и кнопками */}
        <div className={styles.profile__headerBlock}>
          <div className={styles.profile__headPhoto}>
            <div className={styles.userPhoto}>
              <div className={styles.skeletonAvatar}></div>
            </div>
            <div className={styles.skeletonName}></div>

            <div className={styles.MobileBlock}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className={styles.skeletonMobileBlock}></div>
              ))}
            </div>
          </div>

          <div className={styles.profile__headOrder}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.skeletonPortalBlock}></div>
            ))}
          </div>
        </div>

        {/* Блок с табами и информацией */}
        <div className={styles.profile__infoBlock}>
          <div className={styles.button__header}>
            {["Инфо", "Пароль", "Имущество"].map((_, i) => (
              <div key={i} className={styles.skeletonTab}></div>
            ))}
            <div className={styles.skeletonMobileTab}></div>
          </div>

          <div className={styles.skeletonInfoBlock}>
            <div className={styles.skeletonInfoTitle}></div>
            <div className={styles.skeletonInfoContent}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.skeletonInfoRow}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Мобильный блок предложений */}
      <div className={styles.skeletonFeedbackBlock}>
        <div className={styles.skeletonFeedbackTitle}></div>
        <div className={styles.skeletonFeedbackText}></div>
      </div>
    </div>
  );
};
