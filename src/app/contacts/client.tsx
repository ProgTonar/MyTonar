'use client'

import { IContacts } from "@/type/Types";
import { useState, useEffect, useMemo } from "react";
import styles from './contacts.module.scss';
import Button from "@/components/UI/ButtonDefault/ButtonDefault";
import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import { useRouter } from "next/navigation";

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

    return (
        <div className={styles.contactsContainer}>
            <div className={styles.portals__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.portals__title}>
          <h1>Телефонная книга</h1>
        </div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {visibleContacts.map((contact, index) => (
                            <tr key={index} className={styles.contactRow}>
                                <td>{contact.name || '-'}</td>
                                <td>{contact.job_title || '-'}</td>
                                <td>
                                    <a href={`tel:${contact.v_phonenumber}`} className={styles.phoneLink}>
                                        {contact.v_phonenumber || '-'}
                                    </a>
                                </td>
                                <td>
                                    <a href={`tel:${contact.short_phonenumber}`} className={styles.phoneLink}>
                                        {contact.short_phonenumber || '-'}
                                    </a>
                                </td>
                                <td>
                                    <a href={`tel:${contact.mobile_phone}`} className={styles.phoneLink}>
                                        {contact.mobile_phone || '-'}
                                    </a>
                                </td>
                                <td>
                                    <a href={`mailto:${contact.email}`} className={styles.emailLink}>
                                        {contact.email || '-'}
                                    </a>
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