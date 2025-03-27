"use client";

import Link from "next/link";
import Image from "next/image";
import ArrowBread from "@/assets/images/arrowBread.svg";
import styles from "./Breadcrumbs.module.scss";
import { usePathname } from "next/navigation";

// Маппинг путей к их названиям
const pathLabels: Record<string, string> = {
  "/": "Главная",
  "/profile": "Профиль",
  "/zakaz_spravki": "Заказ справки",
  "/dining": "Столовая",
  "/birthdays": "Дни рождения",
  "/search": "Поиск сотрудников",
  "/bus": "Автобусы",
  "/competition": "Трудовое соревнование",
  "/contacts": "Телефонная книга",
  "/portals": "Порталы",
  "/emergency_number": "Экстренные номера",
  "/cheks": "Чеки",
  "/raschet_list": "Расчетный лист",
  "/predlozheniya": "Предложения и замечания",
  "/profile_user": "Профиль пользователя",
  "/news": "Новости",
};

const Breadcrumbs = () => {
  const pathname = usePathname() || "/";

  // Функция для получения метки пути
  const getPathLabel = (path: string): string => {
    return (
      pathLabels[path] ||
      path.split("/").pop()?.replace(/-/g, " ") ||
      "Неизвестная страница"
    );
  };

  // Формируем хлебные крошки на основе текущего пути
  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    const crumblist = segments.map((_, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return { path, label: getPathLabel(path) };
    });

    return [{ path: "/", label: "Главная" }, ...crumblist];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((item, index) => (
        <div key={item.path} className={styles.breadcrumbItem}>
          <Link
            href={item.path}
            className={`${styles.link} ${
              pathname === item.path ? styles.current : ""
            }`}
          >
            {item.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <Image
              src={ArrowBread}
              alt="arrow"
              width={16}
              height={16}
              className={styles.arrow}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
