"use client";

import { ReactNode } from "react";
import styles from "./ProfileInfoBlock.module.scss";

interface PtofileInfoBlockProps {
  children: ReactNode;
  title: string;
  count: ReactNode;
}

const ProfileInfoBlock = ({
  children,
  title,
  count,
}: PtofileInfoBlockProps) => {
  return (
    <div className={styles.infoBlok__content}>
      <div className={styles.infoBlock__header}>
        {title}
        <span>{count}</span>
      </div>
      {children}
    </div>
  );
};

export default ProfileInfoBlock;
