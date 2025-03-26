"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./raschet_list.module.scss";
import { useRouter } from "next/navigation";

const RaschetListClient = () => {
  const router = useRouter();
  return (
    <div className={styles.content}>
      <div className={styles.list__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.list__title}>
          <h1>Расчетный лист</h1>
        </div>
      </div>
      <div className={styles.list__content}>
        <div className={styles.list__header}>
          <p>
            Новый лист будет доступен при начислении заработной платы. Листы
            отображаются <br /> за два последних месяца работы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RaschetListClient;
