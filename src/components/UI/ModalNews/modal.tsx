"use client";

import { useEffect, useState } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
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
        <button className={styles.close__button} onClick={onClose}>
          X
        </button>
        <h2>Модалка</h2>
      </div>
    </div>
  );
};

export default Modal;
