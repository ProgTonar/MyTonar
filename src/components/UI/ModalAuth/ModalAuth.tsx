"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ModalAuth.module.scss";
import CloseButton from "@/assets/images/closeButton.svg";
//import { useAuth } from "@/context/AuthContext";
import Button from "../ButtonDefault/ButtonDefault";
import BottonTop from "../ButtonSecond/Button";
import RuleNumber from "../RuleNumber/RuleNumber";
import { toast } from "react-toastify";

interface ModalHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAuth = ({ isOpen, onClose }: ModalHelpProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  //const { register } = useAuth();
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsActive(true), 10);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  if (!shouldRender) {
    return null;
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Авторизация");
    } else {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      //await register(name, email, password);
      toast.success("Вы успешно зарегистрированы!");
      console.log("Регистрация");
    }
  };

  return (
    <div className={`${styles.section} ${isActive ? styles.active : ""}`}>
      <div className={styles.section__container}>
        <button className={styles.close__button} onClick={onClose}>
          <Image src={CloseButton.src} alt="close" width={11} height={11} />
        </button>
        <div className={styles.header}>
          <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        </div>
        <form
          style={{ paddingBottom: "30px" }}
          onSubmit={handleSubmit}
          className={styles.form}
          id="AuthForm"
        >
          {!isLogin && (
            <div className={styles.form__group}>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Табельный номер"
              />
            </div>
          )}
          <div className={styles.form__group}>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
          </div>
          <div className={styles.form__group}>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Пароль"
            />
          </div>
          {!isLogin && (
            <div className={styles.form__group}>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                placeholder="Подтвердите пароль"
              />
            </div>
          )}
        </form>
        <div className={styles.buttonSection}>
          <Button type="submit" form="AuthForm" onClick={() => handleSubmit}>
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
        </div>

        <div className={styles.toggle__form} onClick={toggleForm}>
          {isLogin
            ? "Еще не зарегистрированы? Зарегистрироваться"
            : "Уже есть аккаунт? Войти"}
        </div>
      </div>
    </div>
  );
};

export default ModalAuth;
