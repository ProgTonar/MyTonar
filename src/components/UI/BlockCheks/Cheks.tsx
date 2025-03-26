"use client";

import styles from "../BlockCheks/cheks.module.scss";

interface CheksProps {
  title: string;
  onClick: () => void;
  disabled: boolean;
  button: React.ReactNode;
}

const Cheks = ({ title, onClick, disabled, button }: CheksProps) => {
  return (
    <div onClick={onClick} tabIndex={-1} className={styles.expenses}>
      <div className={styles.expenses_title}>{title}</div>
      <div className={styles.expenses_sum}>{button}</div>
    </div>
  );
};

export default Cheks;
