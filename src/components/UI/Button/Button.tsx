"use client";

import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
