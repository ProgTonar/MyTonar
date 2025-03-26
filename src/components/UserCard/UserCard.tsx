"use client";

import { ProfileItem } from "@/data/profileData";
import styles from "./UserCard.module.scss";
import Image from "next/image";

interface UserCardProps {
  profile: ProfileItem;
  onClick: () => void;
}

const UserCard = ({ profile, onClick }: UserCardProps) => {
  return (
    <div className={styles.userCard} onClick={onClick}>
      <>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Image width={180} height={210} alt="" src={profile.avatar} />
          </div>
          <div className={styles.name}>{profile.name}</div>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Должность:</th>
              <td>{profile.dolznost}</td>
            </tr>
            <tr>
              <th>Отдел:</th>
              <td>{profile.otdel}</td>
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
            <tr>
              <th>Стаж работы:</th>
              <td>{profile.stazh}</td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
};

export default UserCard;
