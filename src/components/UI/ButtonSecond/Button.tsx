"use client";

import { ReactNode } from "react";
import Image from "next/image";
import ArrowRight from "@/assets/images/arrow-right.svg";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  showArrow?: boolean;
}

const Button = ({
  children,
  disabled = false,
  onClick,
  showArrow = true,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {showArrow && (
        <Image
          src={ArrowRight}
          alt="arrow"
          width={8}
          height={8}
          className={styles.arrow}
        />
      )}
    </button>
  );
};

export default Button;
