"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./bus.module.scss";
import { useRouter } from "next/navigation";
import Buses from "@/components/Buses/Buses";
import { IRoute } from "@/type/Types";

interface ClientBusProps {
  routes: IRoute[];
}

const ClientBus = ({ routes }: ClientBusProps) => {
  const router = useRouter();
  return (
    <div className={styles.content}>
      <div className={styles.bus__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.bus__title}>
          <h1>Расписание автобусов</h1>
        </div>
      </div>
      <Buses title routes={routes} />
    </div>
  );
};

export default ClientBus;
