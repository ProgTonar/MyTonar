"use client";

import styles from "@/styles/MainPage/main.module.scss";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import UserAvatar from "@/assets/images/user.jpg";

const MobileHeader = () => {
  return (
    <div className={styles.mobileHeader}>
      <div className={styles.mobileLogo}>
        <Image src={Logo.src} alt="Logo" width={140} height={36} />
      </div>
      <div className={styles.mobileProfile}>
        <div className={styles.mobileText}>Профиль</div>
        <div className={styles.mobileAvatar}>
          <Image
            src={UserAvatar.src}
            alt="User Avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
