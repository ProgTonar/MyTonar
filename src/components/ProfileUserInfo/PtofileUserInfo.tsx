"use client";

import { ProfileItem } from "@/data/profileData";

import styles from "./ProfileUserInfo.module.scss";

interface ProfileUserInfoProps {
  profile: ProfileItem;
}

const ProfileUserInfo = ({ profile }: ProfileUserInfoProps) => {
  return (
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
  );
};

export default ProfileUserInfo;
