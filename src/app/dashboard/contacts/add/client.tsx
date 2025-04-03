"use client";

import styles from "../[id]/edit.module.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddPhoneClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    job_title: "",
    v_phonenumber: "",
    short_phonenumber: "",
    mobile_phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem("access_token");

      const response = await axios.post(
        `http://localhost:9092/api/contact_add`,
        {
          name: formData.name,
          job_title: formData.job_title,
          v_phonenumber: formData.v_phonenumber,
          short_phonenumber: formData.short_phonenumber,
          mobile_phone: formData.mobile_phone,
          email: formData.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        router.push("/dashboard/contacts");
        toast.success("Новый контакт добавлен");
      } else {
        throw new Error("Ошибка сохранения");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось сохранить изменения");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Редактировать контакт</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Должность</label>
          <input
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Внутренний номер</label>
          <input
            type="text"
            name="v_phonenumber"
            value={formData.v_phonenumber}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Короткий номер</label>
          <input
            type="text"
            name="short_phonenumber"
            value={formData.short_phonenumber}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Мобильный телефон</label>
          <input
            type="text"
            name="mobile_phone"
            value={formData.mobile_phone}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Сохранение..." : "Сохранить"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/news")}
            className={styles.cancelButton}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
