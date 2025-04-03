"use client";

import { IContacts } from "@/type/Types";
import { useState, useMemo } from "react";
import styles from "./contacts.module.scss";
import Button from "@/components/UI/ButtonDefault/ButtonDefault";
import { useRouter } from "next/navigation";
import { useNewsPermissions } from "@/hooks/useNewsPermissions";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";

interface ContactsClientProps {
  contacts: IContacts[];
}

type SortField =
  | "name"
  | "job_title"
  | "v_phonenumber"
  | "short_phonenumber"
  | "mobile_phone"
  | "email";
type SortDirection = "asc" | "desc";

export default function ContactsClient({ contacts }: ContactsClientProps) {
  const router = useRouter();
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [displayCount, setDisplayCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, hasAccess, isAdmin, message } = useNewsPermissions();

  const filteredAndSortedContacts = useMemo(() => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.job_title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.v_phonenumber?.includes(searchTerm) ||
        contact.short_phonenumber?.includes(searchTerm) ||
        contact.mobile_phone?.includes(searchTerm) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      const fieldA = a[sortField] || "";
      const fieldB = b[sortField] || "";

      if (sortDirection === "asc") {
        return fieldA.localeCompare(fieldB);
      } else {
        return fieldB.localeCompare(fieldA);
      }
    });
  }, [contacts, searchTerm, sortField, sortDirection]);

  const visibleContacts = useMemo(() => {
    return filteredAndSortedContacts.slice(0, displayCount);
  }, [filteredAndSortedContacts, displayCount]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  const getSortIcon = (field: SortField) => {
    if (field !== sortField) return null;

    return (
      <span className={styles.sortIcon}>
        {sortDirection === "asc" ? "▲" : "▼"}
      </span>
    );
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/contacts/${id}`, { scroll: false });
  };

  const handleDeleteClick = async (id: number, event?: React.MouseEvent) => {
    event?.stopPropagation();

    try {
      const response = await axios.delete(
        `http://localhost:9092/api/contacts/delete_detail`,
        {
          data: { id },
        }
      );

      if (response.status === 200) {
        toast.success("Контакт успешно удалена");
        router.refresh();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Ошибка при удалении контакта"
        );
      } else {
        toast.error("Произошла непредвиденная ошибка");
        console.error("Delete error:", error);
      }
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Проверка прав доступа...</div>;
  }

  if (!hasAccess) {
    return (
      <div className={styles.accessDenied}>
        <h2>Доступ ограничен</h2>
        <p>
          {message ||
            "Управление новостями доступно только администраторам и редакторам."}
        </p>
        <p>
          Если вам необходим доступ к этому разделу, обратитесь к администратору
          системы.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.contactsContainer}>
      <ToastContainer />
      <div className={styles.portals__header}>
        <div className={styles.portals__title}>
          <h1>Телефонная книга</h1>
        </div>
      </div>

      <div className={styles.adminActions}>
        <button
          className={styles.addButton}
          onClick={() => router.push("/dashboard/contacts/add")}
        >
          Добавить контакт
        </button>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Поиск по имени, должности, телефону или email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.contactsTable}>
          <thead>
            <tr>
              <th
                onClick={() => handleSort("name")}
                className={styles.sortableHeader}
              >
                Имя {getSortIcon("name")}
              </th>
              <th
                onClick={() => handleSort("job_title")}
                className={styles.sortableHeader}
              >
                Должность {getSortIcon("job_title")}
              </th>
              <th
                onClick={() => handleSort("v_phonenumber")}
                className={styles.sortableHeader}
              >
                Внутренний номер {getSortIcon("v_phonenumber")}
              </th>
              <th
                onClick={() => handleSort("short_phonenumber")}
                className={styles.sortableHeader}
              >
                Короткий номер {getSortIcon("short_phonenumber")}
              </th>
              <th
                onClick={() => handleSort("mobile_phone")}
                className={styles.sortableHeader}
              >
                Мобильный телефон {getSortIcon("mobile_phone")}
              </th>
              <th
                onClick={() => handleSort("email")}
                className={styles.sortableHeader}
              >
                Email {getSortIcon("email")}
              </th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {visibleContacts.map((contact, index) => (
              <tr key={index} className={styles.contactRow}>
                <td>{contact.name || "-"}</td>
                <td>{contact.job_title || "-"}</td>
                <td>
                  <a href={`tel:${contact.v_phonenumber}`}>
                    {contact.v_phonenumber || "-"}
                  </a>
                </td>
                <td>
                  <a href={`tel:${contact.short_phonenumber}`}>
                    {contact.short_phonenumber || "-"}
                  </a>
                </td>
                <td>
                  <a href={`tel:${contact.mobile_phone}`}>
                    {contact.mobile_phone || "-"}
                  </a>
                </td>
                <td>
                  <a href={`mailto:${contact.email}`}>{contact.email || "-"}</a>
                </td>
                <td className={styles.actionsCell}>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleEdit(contact.id)}
                  >
                    Редактировать
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={(e) => handleDeleteClick(contact.id)}
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
        <div className={styles.noContacts}>Контакты не найдены</div>
      )}

      {visibleContacts.length > 0 &&
        visibleContacts.length < filteredAndSortedContacts.length && (
          <div className={styles.showMoreContainer}>
            <Button onClick={handleShowMore}>Показать больше</Button>
          </div>
        )}
    </div>
  );
}
