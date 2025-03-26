"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./zakaz_spravki.module.scss";
import { useRouter } from "next/navigation";
import BlockSpravka from "@/components/UI/BlockSpravka/BlockSpravka";
import { useEffect, useState } from "react";
import ModalSpravka from "@/components/UI/ModalSpravka/modalSpravka";

const ZakazSpravkiClient = () => {
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const ModalOpen = () => setIsOpenModal(true);
  const ModalClose = () => setIsOpenModal(false);

  useEffect(ModalOpen, []);

  return (
    <div className={styles.content}>
      <div className={styles.spravka__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.spravka__title}>
          <h1>Заказать справку</h1>
        </div>
      </div>
      <div className={styles.spravka__content}>
        <BlockSpravka title="Справка о зароботной плате" />
        <BlockSpravka title="Справка 2-НДФЛ" />
        <BlockSpravka periodDisabled title="Копия трудовой книжки" />
        <BlockSpravka periodDisabled title="Справка с места работы" />
      </div>
      <ModalSpravka isOpen={isOpenModal} onClose={ModalClose} />
    </div>
  );
};

export default ZakazSpravkiClient;
