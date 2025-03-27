'use client'

import { getUser } from "@/services/getUser";
import { IUser } from "@/type/Types";
import { useEffect, useState } from "react";
import styles from './users.module.scss';
import { useUserPermissions } from "@/hooks/useUserPermissions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function UserClient() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { isLoading, hasAccess, message } = useUserPermissions('users');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUser();
        // Проверяем, что data - это массив
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          setUsers([]);
          setError('Получены некорректные данные пользователей');
        }
      } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
        setError('Не удалось загрузить пользователей');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Проверка прав доступа...</div>;
  }

  if (!hasAccess) {
    return (
      <div className={styles.accessDenied}>
        <h2>Доступ ограничен</h2>
        <p>{message || 'Просмотр списка пользователей доступен только администраторам.'}</p>
        <p className={styles.accessInfo}>Если вам необходим доступ к этому разделу, обратитесь к администратору системы.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h1 className={styles.title}>Пользователи</h1>
      
      <div className={styles.tableContainer}>
        {users.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Пользователь</th>
                <th>Email</th>
                <th>Роль</th>
                <th>Разрешения</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td>
                    <div className={styles.userCell}>
                      <div className={styles.userAvatar}>
                        {(user.first_name?.[0] || user.login?.[0] || '?').toUpperCase()}
                      </div>
                      <div className={styles.userInfo}>
                        <div className={styles.userName}>{user.first_name || user.login || 'Неизвестно'}</div>
                        {user.login && <div className={styles.userLogin}>{user.login}</div>}
                      </div>
                    </div>
                  </td>
                  <td>{user.email || 'Не указан'}</td>
                  <td>
                    <span className={styles.roleTag}>
                      {user.roles && user.roles.length > 0 ? user.roles[0] : 'Пользователь'}
                    </span>
                  </td>
                  <td>
                    <div className={styles.permissionsList}>
                      {user.permissions && Array.isArray(user.permissions) && user.permissions.length > 0 ? (
                        user.permissions.map((permission, index) => (
                          <span key={index} className={styles.permissionTag}>
                            {permission}
                          </span>
                        ))
                      ) : (
                        <span className={styles.noPermissions}>Нет разрешений</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.actionButton}>
                        Редактировать
                      </button>
                      <button className={styles.deleteButton}>
                        Удалить
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.noData}>Нет данных о пользователях</div>
        )}
      </div>
    </div>
  );
}