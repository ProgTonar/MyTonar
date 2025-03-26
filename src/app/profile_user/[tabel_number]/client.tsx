"use client";

import { ProfileItem } from "@/data/profileData";
import styles from "./profile_user.module.scss";
import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProfileUserClientProps {
  profile: ProfileItem;
}

const ProfileUserClient = ({ profile }: ProfileUserClientProps) => {
  const router = useRouter();
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.title}>
          <h1>Профиль пользователя</h1>
        </div>
      </div>
      <div className={styles.profile__content}>
        <div className={styles.userPhoto}>
          <div className={styles.profile__icon}></div>
          <Image
            width={180}
            height={200}
            className={styles.profile__photo}
            src={profile.avatar}
            alt=""
          />
        </div>
        <div className={styles.userInfo}>
          <h2>{profile.name}</h2>
          <p>Подробная информация</p>
          <table className={styles.infoBlock__table}>
            <tbody>
              <tr>
                <th>Табельный номер:</th>
                <td>{profile.tabel_number}</td>
              </tr>
              <tr>
                <th>Стаж работы:</th>
                <td>{profile.stazh}</td>
              </tr>
              <tr>
                <th>Отдел:</th>
                <td>{profile.otdel}</td>
              </tr>
              <tr>
                <th>Должность:</th>
                <td>{profile.dolznost}</td>
              </tr>
              <tr>
                <th>День рождения:</th>
                <td>{profile.birthday}</td>
              </tr>
              <tr>
                <th>Телефон:</th>
                <td>{profile.phone}</td>
              </tr>
              <tr>
                <th>Рабочий телефон:</th>
                <td>{profile.job_phone}</td>
              </tr>
              <tr>
                <th>E-mail:</th>
                <td>{profile.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserClient;
