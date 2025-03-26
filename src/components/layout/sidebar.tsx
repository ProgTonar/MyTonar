"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../../assets/images/logo.svg";
import ArrowLeft from "@/assets/images/arrow-left.svg";
import MiniLogo from "@/assets/images/MiniLogo.svg";
import styles from "@/styles/MainPage/sidebar.module.scss";
import mainStyles from "@/styles/MainPage/main.module.scss";
import Image from "next/image";

interface MenuItem {
  icon: any;
  label: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  children: React.ReactNode;
}

const Sidebar = ({ menuItems, children }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (menuItem: MenuItem) => {
    router.push(menuItem.path);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={mainStyles.layout}>
      <div
        className={`${styles.container} ${isCollapsed ? styles.collapsed : ""}`}
      >
        <div className={styles.logo}>
          {isCollapsed ? (
            <img src={MiniLogo.src} alt="Logo" />
          ) : (
            <img src={Logo.src} alt="Logo" />
          )}
        </div>
        <nav className={styles.menu}>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`${styles.menuItem} ${
                  pathname === item.path ? styles.active : ""
                }`}
                onClick={() => handleNavigation(item)}
              >
                <Image
                  className={styles.icon}
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                />
                {!isCollapsed && <span>{item.label}</span>}
              </li>
            ))}
          </ul>
          <div className={styles.arrowItem} onClick={toggleSidebar}>
            <Image
              src={ArrowLeft.src}
              alt=""
              width={36}
              height={36}
              className={`${styles.arrowIcon} ${
                isCollapsed ? styles.rotated : ""
              }`}
            />
            {!isCollapsed && <span>Свернуть меню</span>}
          </div>
        </nav>
      </div>
      <div
        className={`${mainStyles.content} ${
          isCollapsed ? mainStyles.sidebarCollapsed : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
