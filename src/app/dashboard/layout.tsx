"use client";

import React from "react";
import styles from "./dashboard.module.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Главная</a>
            </li>
            <li>
              <a href="/dashboard/news">Новости</a>
            </li>
            <li>
              <a href="/dashboard/contacts">Телефоны</a>
            </li>
            <li>
              <a href="/dashboard/busnavi">Автобусы</a>
            </li>
            <li>
              <a href="/dashboard/users">Пользователи</a>
            </li>
            <li>
              <a href="/dashboard/role">Роли</a>
            </li>
            <li>
              <a href="/dashboard/permission">Разрешения</a>
            </li>
            <li>
              <a href="/">Вернуться на сайт</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
