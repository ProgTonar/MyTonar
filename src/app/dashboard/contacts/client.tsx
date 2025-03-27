'use client'

import { IContacts } from "@/type/Types";
import { useState, useMemo } from "react";
import styles from './contacts.module.scss';
import Button from "@/components/UI/ButtonDefault/ButtonDefault";
import { useRouter } from "next/navigation";
import { useNewsPermissions } from "@/hooks/useNewsPermissions";

interface ContactsClientProps {
    contacts: IContacts[]
}

type SortField = 'name' | 'job_title' | 'v_phonenumber' | 'short_phonenumber' | 'mobile_phone' | 'email';
type SortDirection = 'asc' | 'desc';

export default function ContactsClient({contacts}: ContactsClientProps) {
    const router = useRouter()
    const [sortField, setSortField] = useState<SortField>('name');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [displayCount, setDisplayCount] = useState(10);
    const { isLoading, hasAccess, isAdmin, message } = useNewsPermissions();
    
    const sortedContacts = useMemo(() => {
        return [...contacts].sort((a, b) => {
            const fieldA = a[sortField] || '';
            const fieldB = b[sortField] || '';
            
            if (sortDirection === 'asc') {
                return fieldA.localeCompare(fieldB);
            } else {
                return fieldB.localeCompare(fieldA);
            }
        });
    }, [contacts, sortField, sortDirection]);

    const visibleContacts = useMemo(() => {
        return sortedContacts.slice(0, displayCount);
    }, [sortedContacts, displayCount]);
    
    const handleSort = (field: SortField) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    
    const handleShowMore = () => {
        setDisplayCount(prev => prev + 10);
    };
    
    const getSortIcon = (field: SortField) => {
        if (field !== sortField) return null;
        
        return (
            <span className={styles.sortIcon}>
                {sortDirection === 'asc' ? '▲' : '▼'}
            </span>
        );
    };

    const handleEdit = (contactId: string) => {
        router.push(`/dashboard/contacts/edit/${contactId}`);
    };
    
    const handleDelete = (contactId: string) => {
        if (confirm('Вы уверены, что хотите удалить этот контакт?')) {
            console.log('Удаление контакта с ID:', contactId);
        }
    };

    if (isLoading) {
        return <div className={styles.loading}>Проверка прав доступа...</div>;
    }
    
    if (!hasAccess) {
        return (
          <div className={styles.accessDenied}>
            <h2>Доступ ограничен</h2>
            <p>{message || 'Управление новостями доступно только администраторам и редакторам.'}</p>
            <p>Если вам необходим доступ к этому разделу, обратитесь к администратору системы.</p>
          </div>
        );
    }

    return (
        <div className={styles.contactsContainer}>
           <h1>Телефонная книга</h1>
           <div className={styles.adminActions}>
                <button 
                  className={styles.addButton}
                  onClick={() => router.push('/dashboard/contacts/add')}
                >
                  Добавить контакт
                </button>
           </div>
            
            <div className={styles.tableContainer}>
                <table className={styles.contactsTable}>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('name')} className={styles.sortableHeader}>
                                Имя {getSortIcon('name')}
                            </th>
                            <th onClick={() => handleSort('job_title')} className={styles.sortableHeader}>
                                Должность {getSortIcon('job_title')}
                            </th>
                            <th onClick={() => handleSort('v_phonenumber')} className={styles.sortableHeader}>
                                Внутренний номер {getSortIcon('v_phonenumber')}
                            </th>
                            <th onClick={() => handleSort('short_phonenumber')} className={styles.sortableHeader}>
                                Короткий номер {getSortIcon('short_phonenumber')}
                            </th>
                            <th onClick={() => handleSort('mobile_phone')} className={styles.sortableHeader}>
                                Мобильный телефон {getSortIcon('mobile_phone')}
                            </th>
                            <th onClick={() => handleSort('email')} className={styles.sortableHeader}>
                                Email {getSortIcon('email')}
                            </th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleContacts.map((contact, index) => (
                            <tr key={index} className={styles.contactRow}>
                                <td>{contact.name || '-'}</td>
                                <td>{contact.job_title || '-'}</td>
                                <td>
                                    <a href={`tel:${contact.v_phonenumber}`}>
                                        {contact.v_phonenumber || '-'}
                                    </a>
                                </td>
                                <td>
                                    <a href={`tel:${contact.short_phonenumber}`}>
                                        {contact.short_phonenumber || '-'}
                                    </a>
                                </td>
                                <td>
                                    <a href={`tel:${contact.mobile_phone}`}>
                                        {contact.mobile_phone || '-'}
                                    </a>
                                </td>
                                <td>
                                    <a href={`mailto:${contact.email}`}>
                                        {contact.email || '-'}
                                    </a>
                                </td>
                                <td className={styles.actionsCell}>
                  <button 
                    className={styles.actionButton}
                    onClick={() => ('')}
                  >
                    Редактировать
                  </button>
                  <button 
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={(e) => ('')}
                  >
                    Удалить
                  </button>
                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {visibleContacts.length === 0 && (
                <div className={styles.noContacts}>
                    Контакты не найдены
                </div>
            )}
            
            {visibleContacts.length > 0 && visibleContacts.length < sortedContacts.length && (
                <div className={styles.showMoreContainer}>
                    <Button 
                        onClick={handleShowMore}
                    >
                        Показать больше
                    </Button>
                </div>
            )}
        </div>
    );
}