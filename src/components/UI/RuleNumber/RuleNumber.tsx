"use client";

import styles from "./RuleNumber.module.scss";

interface RuleNumberProps {
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const RuleNumber = ({ label, icon, disabled, onClick }: RuleNumberProps) => {
  return (
    <div
      onClick={onClick}
      tabIndex={-1}
      className={`${styles.emergency__rule} ${disabled ? styles.disabled : ""}`}
    >
      {typeof icon === "string" ? <img src={icon} alt="" /> : icon}
      {label}
    </div>
  );
};

export default RuleNumber;
