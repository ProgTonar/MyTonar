"use client";

import Image from "next/image";
import styles from "./modalSpravka.module.scss";
import Warning from "@/assets/images/warning.svg";
import Button from "../ButtonDefault/ButtonDefault";
import { useEffect, useState } from "react";

interface ModalSpravkaProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSpravka = ({ isOpen, onClose }: ModalSpravkaProps) => {
  const [isActive, setIsActive] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsActive(true), 10);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={`${styles.section} ${isActive ? styles.active : ""}`}>
      <div className={styles.section__container}>
        <div className={styles.header}>
          <Image src={Warning.src} height={79} width={90} alt="Warning" />
        </div>
        <div className={styles.content}>
          <p>
            Если вы заказали справку и не пришли за ней в течение недели,
            взимается штраф в размере 2000 рублей.
          </p>
        </div>
        <div className={styles.button}>
          <Button onClick={onClose}>Я заберу справку вовремя</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalSpravka;
