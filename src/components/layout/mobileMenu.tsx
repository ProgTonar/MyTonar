"use client";

import styles from "@/styles/MainPage/sidebar.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubMenu from "../UI/SubMenu/SubMenu";

interface SubMenuItem {
  icon: any;
  label: string;
  path: string;
}

interface MenuMobileItem {
  icon: any;
  label: string;
  path: string;
  subMenu?: SubMenuItem[];
}

interface MenuMobileProps {
  menuMobileItems: MenuMobileItem[];
}

const MobileMenu = ({ menuMobileItems }: MenuMobileProps) => {
  const [selectedMenuPath, setSelectedMenuPath] = useState<string | null>(null);
  const router = useRouter();

  const handleMenuClick = (path: string, subMenu?: SubMenuItem[]) => {
    if (subMenu) {
      // Если у пункта меню есть подменю, открываем/закрываем его
      setSelectedMenuPath((prev) => (prev === path ? null : path));
    } else {
      // Если подменю нет, переходим по пути
      router.push(path);
      setSelectedMenuPath(null); // Закрываем подменю, если оно было открыто
    }
  };

  const handleSubMenuItemClick = (path: string) => {
    router.push(path); // Переходим по пути пункта подменю
    setSelectedMenuPath(null); // Закрываем подменю
  };

  // Находим выбранный пункт меню
  const selectedMenuItem = menuMobileItems.find(
    (item) => item.path === selectedMenuPath
  );

  return (
    <>
      <div className={styles.content}>
        {menuMobileItems.map((menuMobileItem, index) => (
          <div className={styles.section} key={index}>
            <div
              onClick={() =>
                handleMenuClick(menuMobileItem.path, menuMobileItem.subMenu)
              }
              className={styles.menu__Items}
            >
              <Image width={32} height={32} src={menuMobileItem.icon} alt="" />
              <span>{menuMobileItem.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Рендерим SubMenu, если есть выбранный пункт меню и у него есть подменю */}
      {selectedMenuItem?.subMenu && (
        <div
          className={`${styles.visibled} ${
            selectedMenuPath ? styles.open : styles.closed
          }`}
        >
          <SubMenu
            menuItems={selectedMenuItem.subMenu}
            onItemClick={handleSubMenuItemClick} // Передаем обработчик клика по пункту подменю
          />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
