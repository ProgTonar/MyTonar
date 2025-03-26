"use client";

import Image from "next/image";
import styles from "./UserInfo.module.scss";
import BottomIcon from "@/assets/images/bottom-icon.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";



interface UserInfoProps {
  name: string;
  position: string;
  avatarUrl: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

const UserInfo = ({
  name,
  position,
  avatarUrl,
  onClick,
  isExpanded,
}: UserInfoProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const isAuth = useAuth()

  
  function redirectToLogin() {
    try {
        
        const redirectUrl = window.location.origin + '/dashboard';
        
        // Выводим URL для отладки
        console.log('Redirecting to:', 'http://localhost:9091/login?redirect_url=' + encodeURIComponent(redirectUrl));
        
        // Редирект на страницу логина бэкенда
        window.location.href = 'http://localhost:9091/login?redirect_url=' + encodeURIComponent(redirectUrl);
    } catch (error) {
        console.error('Redirect error:', error);
    }
}

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      {isMobile ? (
        <div onClick={onClick}>Профиль</div>
      ) : (
        <div className={styles.userInfo}>
          <div className={styles.user} onClick={onClick}>
            {isAuth ? (
              <><Image
                  src={avatarUrl}
                  alt="User avatar"
                  width={44}
                  height={44}
                  className={styles.userAvatar} /><div className={styles.userDetails}>
                    <div className={styles.userName}>{name}</div>
                    <div className={styles.userPosition}>{position}</div>
                  </div><img
                    src={BottomIcon.src}
                    alt="Bottom icon"
                    className={`${styles.img} ${isExpanded ? styles.rotate : ""}`} /></>
            ):(<div className={styles.buttonLogin} onClick={() => redirectToLogin()}>Войти</div>)}
            
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
