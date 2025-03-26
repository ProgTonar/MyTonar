"use client";

import { IProperty } from "@/type/Types";
import styles from "./ProfileProperty.module.scss";

interface ProfilePropertyInfoProps {
  property: IProperty[];
}

const ProfilePropertyInfo = ({ property }: ProfilePropertyInfoProps) => {
  return (
    <div className={styles.propertyContainer}>
      {property.map((item, index) => (
        <div key={index} className={styles.propertyItem}>
          <h3>{item.nomenclature}</h3>
          <table className={styles.infoBlock__table}>
            <tbody>
              <tr>
                <th>Инвентарный номер:</th>
                <td>{item.code}</td>
              </tr>
              <tr>
                <th>Количество:</th>
                <td>{item.quanity}</td>
              </tr>
              <tr>
                <th>Дата закрепления:</th>
                <td>{item.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProfilePropertyInfo;
