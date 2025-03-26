"use client";

import styles from "./BlockPredlozheniya.module.scss";

interface BlockPredlozheniyaProps {
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const BlockPredlozheniya = ({
  title,
  icon,
  disabled,
  onClick,
}: BlockPredlozheniyaProps) => {
  return (
    <>
      {!disabled ? (
        <div className={styles.section} onClick={onClick}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div className={styles.header}>{title}</div>
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

export default BlockPredlozheniya;
