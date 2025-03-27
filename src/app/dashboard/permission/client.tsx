'use client'

import { IPermission} from "@/type/Types";
import { useEffect, useState } from "react";
import styles from './role.module.scss';
import { useUserPermissions } from "@/hooks/useUserPermissions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getPermissions } from "@/services/getPermission";

export default function PermissionClient() {
    const [permissions, settPermissions] = useState<IPermission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const { isLoading, hasAccess, message } = useUserPermissions('roles');

    useEffect(() => {
        const fetchPermissions = async () => {
          try {
            const data = await getPermissions();
            if (Array.isArray(data)) {
                settPermissions(data);
            } else {
                settPermissions([]);
              setError('Не хватает прав для просмотра');
            }
          } catch (error) {
            console.error('Ошибка загрузки ролей:', error);
            setError('Не удалось загрузить роли');
            settPermissions([]);
          } finally {
            setLoading(false);
          }
        };
        
        fetchPermissions();
      }, []);

    if (isLoading) {
        return <div className={styles.loading}>Проверка прав доступа...</div>;
    }

    if (!hasAccess) {
        return (
            <div className={styles.accessDenied}>
              <h2>Доступ ограничен</h2>
              <p>{message || 'Просмотр разрешений доступен только администраторам.'}</p>
              <p className={styles.accessInfo}>Если вам необходим доступ к этому разделу, обратитесь к администратору системы.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <h1 className={styles.title}>Разрешения</h1>
            
            <div className={styles.adminActions}>
              <button 
                className={styles.addButton}
                onClick={() => toast.info('Функция добавления разрешения будет доступна в ближайшее время')}
              >
                Добавить разрешение
              </button>
            </div>
            
            <div className={styles.tableContainer}>
                {permissions.length > 0 ? (
                  <table className={styles.table}>
                      <thead>
                          <tr>
                              <th>Название разрешения</th>
                              
                              <th>Действия</th>
                          </tr>
                      </thead>
                      <tbody>
                          {permissions.map((permission, index) => (
                              <tr key={index} className={styles.tableRow}>
                                  <td className={styles.roleNameCell}>
                                      <span className={styles.roleBadge}>{permission.name || 'Без названия'}</span>
                                  </td>
                                  <td>
                                      
                                  </td>
                                  <td className={styles.actionsCell}>
                                      <button className={styles.actionButton}>
                                          Редактировать
                                      </button>
                                      <button className={`${styles.actionButton} ${styles.deleteButton}`}>
                                          Удалить
                                      </button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                ) : (
                  <div className={styles.noData}>Нет данных о разрешениях</div>
                )}
            </div>
        </div>
    );
}