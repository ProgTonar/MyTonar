'use client'

import { INews } from "@/type/Types";
import styles from './News.module.scss'
import { useRouter } from "next/navigation";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface NewsProps {
  news: INews[];
}

const NewsDashboardClient = ({ news }: NewsProps) => {
  const router = useRouter();
  const [roles, setRoles] = useState<string[]>([]);
  const [hasAdminAccess, setHasAdminAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    const date = parse(dateString, "dd MMMM yyyy", new Date());
    return format(date, "dd MMMM yyyy", { locale: ru });
  };

  useEffect(() => {
    const getUserRoles = async () => {
      try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          throw new Error('Токен авторизации не найден');
        }
        
        const response = await axios.post(
          `http://localhost:9091/api/user/roles-and-permissions`, 
          {}, 
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        
        const userRoles = response.data.roles || [];
        setRoles(userRoles);
        setHasAdminAccess(userRoles.includes('admin'));
        
      } catch (error) {
        console.error('Ошибка при получении ролей и разрешений:', error);
        setRoles([]);
        setHasAdminAccess(false);
      } finally {
        setLoading(false);
      }
    };

    getUserRoles();
  }, []);

  const handleNewsClick = (id: number) => {
    if (hasAdminAccess) {
      router.push(`/dashboard/news/${id}`, { scroll: false })
    } else {
     toast.error('У вас нет прав администратора для редактирования новостей');
     
    }
  };

  return (
    <div className={styles.content}>
        <ToastContainer />
      {hasAdminAccess && (
        <div className={styles.adminNotice}>
          Режим администратора: вы можете редактировать и добавлять новости
          <button onClick={() => router.push('/dashboard/addnew')}>Добавить новость</button>
        </div>
      )}
      
      <div className={styles.news__content}>
        {news.map((newItem) => (
          <div
            key={newItem.id}
            className={styles.section}
            onClick={() => handleNewsClick(newItem.id)}
          >
            <div className={styles.newBlock}>
              <div
                className={styles.Image}
                style={{
                  backgroundImage: `url(${newItem.image_url})`,
                  backgroundPosition: "center",
                }}
              ></div>
              <div className={styles.content}>
                <div className={styles.section__date}>
                  {formatDate(newItem.date)}
                </div>
                <div className={styles.section__title}>{newItem.title_one}</div>
                <div className={styles.section__description}>
                  {newItem.description}
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsDashboardClient;