'use client'

import { INews } from "@/type/Types";
import styles from './News.module.scss'
import { useRouter } from "next/navigation";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNewsPermissions } from "@/hooks/useNewsPermissions";
import axios from "axios";

interface NewsProps {
  news: INews[];
}

const NewsDashboardClient = ({ news }: NewsProps) => {
  const router = useRouter();
  const { isLoading, hasAccess, isAdmin, message } = useNewsPermissions();

  const formatDate = (dateString: string) => {
    const date = parse(dateString, "dd MMMM yyyy", new Date());
    return format(date, "dd MMMM yyyy", { locale: ru });
  };

  const handleDeleteClick = async (id: number, event?: React.MouseEvent) => {
    event?.stopPropagation();
    
   
  
    try {
      const response = await axios.delete(`http://localhost:9092/api/news/delete_detail`, {
        data: { id }
      });
      
      if (response.status === 200) {
        toast.success('Новость успешно удалена');
        router.refresh();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Ошибка при удалении новости');
      } else {
        toast.error('Произошла непредвиденная ошибка');
        console.error('Delete error:', error);
      }
    }
  };

  const handleNewsClick = (id: number) => {
    router.push(`/dashboard/news/${id}`, { scroll: false });
  };


  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  if (isLoading) {
    return <div className={styles.loading}>Проверка прав доступа...</div>;
  }

  if (!hasAccess) {
    return (
      <div className={styles.accessDenied}>
        <h2>Доступ ограничен</h2>
        <p>{message || 'Управление новостями доступно только администраторам и редакторам.'}</p>
        <p className={styles.accessInfo}>Если вам необходим доступ к этому разделу, обратитесь к администратору системы.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h1 className={styles.title}>Управление новостями</h1>
      
      <div className={styles.adminActions}>
        <button 
          className={styles.addButton}
          onClick={() => router.push('/dashboard/addnew')}
        >
          Добавить новость
        </button>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Изображение</th>
              <th>Заголовок</th>
              <th>Подзаголовок</th>
              <th>Описание</th>
              <th>Контент</th>
              <th>Дата</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {news.reverse().map((newsItem) => (
              <tr key={newsItem.id} className={styles.tableRow}>
                <td className={styles.imageCell}>
                  <div 
                    className={styles.newsImage}
                    style={{
                      backgroundImage: `url(${newsItem.image_url})`,
                    }}
                  />
                </td>
                <td className={styles.titleCell}>
                  {truncateText(newsItem.title_one, 50)}
                </td>
                <td className={styles.titleCell}>
                  {truncateText(newsItem.title_two, 50)}
                </td>
                <td className={styles.descriptionCell}>
                  {truncateText(newsItem.description, 50)}
                </td>
                <td className={styles.descriptionCell}>
                  {truncateText(newsItem.content, 50)}
                </td>
                <td className={styles.dateCell}>
                  {formatDate(newsItem.date)}
                </td>
                <td className={styles.actionsCell}>
                  <button 
                    className={styles.actionButton}
                    onClick={() => handleNewsClick(newsItem.id)}
                  >
                    Редактировать
                  </button>
                  <button 
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={(e) => handleDeleteClick(newsItem.id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewsDashboardClient;