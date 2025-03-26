"use client";

import { ReactNode } from "react";
import styles from "./ButtonBack.module.scss";
import Image from "next/image";
import Arrow from "@/assets/images/arrow-back.svg";

interface ButtonBackProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const ButtonBack = ({
  children,
  disabled = false,
  onClick,
}: ButtonBackProps) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Image
        style={{ paddingRight: "10px" }}
        src={Arrow.src}
        width={12}
        height={12}
        alt=""
      />
      {children}
    </button>
  );
};

export default ButtonBack;
