"use client";

import Image from "next/image";
import styles from "./SubMenu.module.scss";
import Logo from "@/assets/images/logo.svg";
import VK from "@/assets/images/VK-icon.png";
import RT from "@/assets/images/Rutube-icon.png";
import TG from "@/assets/images/Telegram-icon.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SubMenu {
  icon: any;
  label: string;
  path: string;
}

interface SubMenuProps {
  menuItems: SubMenu[];
  onItemClick: (path: string) => void;
}

const SubMenu = ({ menuItems, onItemClick }: SubMenuProps) => {
  const router = useRouter();

  const handleNavigation = (menuItem: SubMenu) => {
    router.push(menuItem.path);
    onItemClick(menuItem.path);
  };
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <Image width={192} height={50} src={Logo.src} alt="" />
        <div className={styles.social}>
          <span>Наши соцсети</span>
          <div className={styles.icon}>
            <Image src={VK.src} width={25} height={25} alt="VK" />
            <Image src={RT.src} width={25} height={25} alt="RT" />
            <Image src={TG.src} width={25} height={25} alt="TG" />
          </div>
        </div>
      </div>
      <nav className={styles.menu}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={styles.menuItem}
              onClick={() => handleNavigation(item)}
            >
              <Image
                className={styles.icon}
                src={item.icon}
                alt=""
                width={18}
                height={18}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.link}>
        <span>Карта сайта</span>
        <span>Новости портала</span>
        <span>Сайт завода</span>
        <span>Предложения и пожелания</span>
      </div>
    </div>
  );
};

export default SubMenu;
