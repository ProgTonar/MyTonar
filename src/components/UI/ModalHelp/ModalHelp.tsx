"use client";

import Image from "next/image";
import styles from "./ModalHelp.module.scss";

import CloseButton from "@/assets/images/closeButton.svg";
import { useEffect, useState } from "react";

interface ModalHelpProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  block1?: { title: string; description: string };
  block2?: { title: string; description: string };
  block3?: { title: string; description: string };
}

const ModalHelp = ({
  isOpen,
  onClose,
  title,
  description,
  block1,
  block2,
  block3,
}: ModalHelpProps) => {
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
          <Image src={CloseButton.src} alt="close" width={11} height={11} />
        </button>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.content}>
          {block1 && (
            <>
              <h3>{block1.title}</h3>
              <p>{block1.description}</p>
            </>
          )}
          {block2 && (
            <>
              <h3>{block2.title}</h3>
              <p>{block2.description}</p>
            </>
          )}
          {block3 && (
            <>
              <h3>{block3.title}</h3>
              <p>{block3.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalHelp;
