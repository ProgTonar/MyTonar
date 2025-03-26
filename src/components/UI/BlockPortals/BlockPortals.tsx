"use client";

import styles from "./BlockPortals.module.scss";

interface BlockPortalsProps {
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const BlockPortals = ({
  title,
  icon,
  disabled,
  onClick,
}: BlockPortalsProps) => {
  return (
    <>
      {!disabled ? (
        <div className={styles.section} onClick={onClick}>
          <div className={styles.header}>{title}</div>
          {icon && <div className={styles.icon}>{icon}</div>}
        </div>
      ) : (
        <div className={styles.section_disabled}>
          <div className={styles.header}>{title}</div>
          {icon && <div className={styles.icon}>{icon}</div>}
        </div>
      )}
    </>
  );
};

export default BlockPortals;
