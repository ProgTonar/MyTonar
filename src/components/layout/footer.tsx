"use client";

import styles from "@/styles/MainPage/footer.module.scss";
import mainStyles from "@/styles/MainPage/main.module.scss";
import VK from "@/assets/images/VK-icon.png";
import RT from "@/assets/images/Rutube-icon.png";
import TG from "@/assets/images/Telegram-icon.png";
import Rustore from "@/assets/images/Лого Рустор.png";
import QR from "@/assets/images/QR-код.png";
import Download from "@/assets/images/Скачайте приложение.png";
import Image from "next/image";

const Footer = () => {
  const menu = [
    { label: "Карта сайта", path: "#" },
    { label: "Новости портала", path: "#" },
    { label: "Сайт завода", path: "#" },
    { label: "Предложения и пожелания", path: "#" },
  ];

  return (
    <footer className={`${mainStyles.footer} ${styles.footer}`}>
      <div className={styles.footer__main}>
        <div className={styles.footer__item}>
          <div className={styles.footer__icon}>
            <Image src={VK.src} width={30} height={30} alt="VK" />
            <Image src={RT.src} width={30} height={30} alt="RT" />
            <Image src={TG.src} width={30} height={30} alt="TG" />
          </div>
          <div className={styles.footer__menu}>
            {menu.map((item, index) => (
              <a key={index} href={item.path}>
                {item.label}
              </a>
            ))}
            <div className={styles.text__mobile}>
              Скачайте наше приложение =)
            </div>
            <Image
              className={styles.footer__img}
              src={Download.src}
              width={248}
              height={78}
              alt="Download app"
              priority
            />
            <Image
              className={styles.footer__rustore}
              src={Rustore.src}
              width={89}
              height={31}
              alt="Rustore"
              priority
            />
          </div>
        </div>
        <div className={styles.footer__info}>
          <span>© «Тонар», 2024</span>
        </div>
      </div>

      <div className={styles.footer__qr}>
        <Image src={QR.src} width={140} height={140} alt="QR" priority />
      </div>
    </footer>
  );
};

export default Footer;
