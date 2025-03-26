"use client";

import { ReactNode } from "react";
import styles from "./ButtonDefault.module.scss";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  form?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  disabled = false,
  onClick,
  form,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
      form={form}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;