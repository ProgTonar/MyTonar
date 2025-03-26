"use client";

import styles from "./expenses.module.scss";

interface ExpensesProps {
  title: string;
  date: string;
  totalSum: string;
  onClick: () => void;
  disabled: boolean;
}

const Expenses = ({
  title,
  date,
  totalSum,
  onClick,
  disabled,
}: ExpensesProps) => {
  return (
    <div onClick={onClick} tabIndex={-1} className={styles.expenses}>
      <div className={styles.expenses_title}>
        {title}
        <br /> с {date}
      </div>
      <div className={styles.expenses_sum}>{totalSum}</div>
    </div>
  );
};

export default Expenses;
