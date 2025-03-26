"use client";

import styles from "@/styles/MainPage/header.module.scss";
import SearchInput from "@/components/UI/Input/SearchInput";
import UserInfo from "@/components/UI/UserInfo/UserInfo";
import UserAvatar from "@/assets/images/user.jpg";
import Button from "@/components/UI/Button/Button";

import { useEffect, useState, useRef } from "react";

import DropDownMenu from "../UI/DropDownMenu/dropDown";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <SearchInput
          placeholder="Поиск сотрудников по ФИО"
          onChange={(value) => console.log("Search:", value)}
        />
        <div className={styles.Button}>
          <Button onClick={() => router.push("/emergency_number")}>
            Экстренные номера
          </Button>
        </div>

        <div className={styles.userInfoContainer} ref={dropdownRef}>
          <UserInfo
            name="Петрова Анна Максимовна"
            position="Слесарь 1 категории"
            avatarUrl={UserAvatar.src}
            onClick={toggleMenu}
            isExpanded={isExpanded}
          />
          {isExpanded && (
            <DropDownMenu onItemClick={() => setIsExpanded(false)} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
