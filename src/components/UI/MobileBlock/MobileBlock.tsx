"use client";

import styles from "./MobileBlock.module.scss";

interface MobileBlockProps {
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const MobileBlock = ({ title, icon, disabled, onClick }: MobileBlockProps) => {
  return (
    <>
      {!disabled ? (
        <div className={styles.section} onClick={onClick}>
          {icon && <div className={styles.icon}></div>}
          <div className={styles.header}>{title}</div>
        </div>
      ) : (
        <div className={styles.section_disabled}>
          <div className={styles.header}>{title}</div>
          {icon && <div className={styles.icon}></div>}
        </div>
      )}
    </>
  );
};

export default MobileBlock;
