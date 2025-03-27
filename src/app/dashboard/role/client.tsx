'use client'

import { getRole } from "@/services/getRole";
import { IPermission, IRole } from "@/type/Types";
import { useEffect, useState } from "react";
import styles from './role.module.scss';
import { useUserPermissions } from "@/hooks/useUserPermissions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RoleClient() {
    const [roles, setRoles] = useState<IRole[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const { isLoading, hasAccess, message } = useUserPermissions('roles');

    useEffect(() => {
        const fetchRoles = async () => {
          try {
            const data = await getRole();
            if (Array.isArray(data)) {
              setRoles(data);
            } else {
              setRoles([]);
              setError('Не хватает прав для просмотра');
            }
          } catch (error) {
            console.error('Ошибка загрузки ролей:', error);
            setError('Не удалось загрузить роли');
            setRoles([]);
          } finally {
            setLoading(false);
          }
        };
        
        fetchRoles();
      }, []);

    if (isLoading) {
        return <div className={styles.loading}>Проверка прав доступа...</div>;
    }

    if (!hasAccess) {
        return (
            <div className={styles.accessDenied}>
              <h2>Доступ ограничен</h2>
              <p>{message || 'Просмотр ролей доступен только администраторам.'}</p>
              <p className={styles.accessInfo}>Если вам необходим доступ к этому разделу, обратитесь к администратору системы.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <h1 className={styles.title}>Роли</h1>
            
            <div className={styles.adminActions}>
              <button 
                className={styles.addButton}
                onClick={() => toast.info('Функция добавления роли будет доступна в ближайшее время')}
              >
                Добавить роль
              </button>
            </div>
            
            <div className={styles.tableContainer}>
                {roles.length > 0 ? (
                  <table className={styles.table}>
                      <thead>
                          <tr>
                              <th>Название роли</th>
                              <th>Разрешения</th>
                              <th>Действия</th>
                          </tr>
                      </thead>
                      <tbody>
                          {roles.map((role, index) => (
                              <tr key={index} className={styles.tableRow}>
                                  <td className={styles.roleNameCell}>
                                      <span className={styles.roleBadge}>{role.name || 'Без названия'}</span>
                                  </td>
                                  <td>
                                      <div className={styles.permissionsContainer}>
                                          {role.permissions && Array.isArray(role.permissions) && role.permissions.length > 0 ? (
                                              <div className={styles.permissionsList}>
                                                  {role.permissions.map((permission: string | IPermission, index) => (
                                                      <span key={index} className={styles.permissionTag}>
                                                          {typeof permission === 'string' 
                                                              ? permission 
                                                              : permission.name || JSON.stringify(permission)}
                                                      </span>
                                                  ))}
                                              </div>
                                          ) : (
                                              <span className={styles.noPermissions}>Нет разрешений</span>
                                          )}
                                      </div>
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
                  <div className={styles.noData}>Нет данных о ролях</div>
                )}
            </div>
        </div>
    );
}