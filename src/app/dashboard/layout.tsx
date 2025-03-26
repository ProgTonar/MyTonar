import React from 'react';
import styles from './dashboard.module.scss';



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
              <a href="/dashboard/settings">Настройки</a>
            </li>
            <li>
              <a href="/">Вернуться на сайт</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
