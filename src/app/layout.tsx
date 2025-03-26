import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomeIcon from "@/assets/images/home-icon.svg";
import ProfileIcon from "@/assets/images/profile-icon.svg";
import SpravkaIcon from "@/assets/images/spravka-icon.svg";
import DinnerIcon from "@/assets/images/dinner-icon.svg";
import GiftIcon from "@/assets/images/gift-icon.svg";
import SearchIcon from "@/assets/images/search-icon.svg";
import BusIcon from "@/assets/images/bus-icon.svg";
import CupIcon from "@/assets/images/cup-icon.svg";
import PhoneIcon from "@/assets/images/phone-icon.svg";
import WebIcon from "@/assets/images/web-icon.svg";
import styles from "@/styles/MainPage/main.module.scss";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import MobileHeader from "@/components/layout/mobileHeader";
import MobileMenu from "@/components/layout/mobileMenu";

import iconNumber from "@/assets/images/iconNumber.svg";
import iconSearch from "@/assets/images/iconSearch.svg";
import iconProfile from "@/assets/images/iconProfile.svg";
import iconDining from "@/assets/images/iconDining.svg";
import iconBurger from "@/assets/images/iconBurger.svg";

const menuItems = [
  { icon: HomeIcon, label: "Главная", path: "/" },
  { icon: ProfileIcon, label: "Профиль", path: "/profile" },
  { icon: SpravkaIcon, label: "Заказ справки", path: "/zakaz_spravki" },
  { icon: DinnerIcon, label: "Столовая", path: "/dining" },
  { icon: GiftIcon, label: "Дни рождения", path: "/birthdays" },
  { icon: SearchIcon, label: "Поиск сотрудников", path: "/search" },
  { icon: BusIcon, label: "Автобусы", path: "/bus" },
  { icon: CupIcon, label: "Трудовое соревнование", path: "/competition" },
  { icon: PhoneIcon, label: "Телефонная книга", path: "/phonebook" },
  { icon: WebIcon, label: "Порталы", path: "/portals" },
];

const SubMenu = [
  { icon: HomeIcon, label: "Главная", path: "/" },
  { icon: SpravkaIcon, label: "Заказ справки", path: "/zakaz_spravki" },
  { icon: GiftIcon, label: "Дни рождения", path: "/birthdays" },
  { icon: BusIcon, label: "Автобусы", path: "/bus" },
  { icon: CupIcon, label: "Трудовое соревнование", path: "/competition" },
  { icon: PhoneIcon, label: "Телефонная книга", path: "/phonebook" },
  { icon: WebIcon, label: "Порталы", path: "/portals" },
];

const menuMobileItems = [
  { icon: iconBurger, label: "Меню", path: "", subMenu: SubMenu },
  { icon: iconDining, label: "Столовая", path: "/dining" },
  { icon: iconProfile, label: "Профиль", path: "/profile" },
  { icon: iconSearch, label: "Поиск", path: "/search" },
  { icon: iconNumber, label: "Срочные номера", path: "/emergency_number" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>
        <Sidebar menuItems={menuItems}>
          <div className={styles.mobileHeader}>
            <MobileHeader />
          </div>
          <div className={styles.header}>
            <Header />
          </div>

          <div className={styles.navigation}>
            <Breadcrumbs />
          </div>
          <main className={styles.main}>{children}</main>

          <Footer />

          <MobileMenu menuMobileItems={menuMobileItems} />
        </Sidebar>
      </body>
    </html>
  );
}
