"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./emergency_number.module.scss";
import Help from "@/assets/images/Подсказка.png";
import Health from "@/assets/images/health.png";
import Fire from "@/assets/images/fire.png";
import Flash from "@/assets/images/flash.png";
import Tempirature from "@/assets/images/tempirature.png";
import Sheld from "@/assets/images/sheld.png";
import { useRouter } from "next/navigation";
import RuleNumber from "@/components/UI/RuleNumber/RuleNumber";
import BlockPhone from "@/components/UI/BlockPhone/BlockPhone";
import Image from "next/image";
import { EmergencyData } from "@/data/emergencyData";
import ModalHelp from "@/components/UI/ModalHelp/ModalHelp";
import { useState } from "react";

const icons = {
  health: Health,
  fire: Fire,
  flash: Flash,
  temperature: Tempirature,
  shield: Sheld,
};

interface EmergencyClientProps {
  data: EmergencyData;
  ModalContent: {
    block1: { title: string; description: string };
    block2: { title: string; description: string };
    block3: { title: string; description: string };
  };
}

const ClientNumber = ({ data, ModalContent }: EmergencyClientProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  const ModalOpen = () => setIsOpenModal(true);
  const ModalClose = () => setIsOpenModal(false);

  return (
    <div className={styles.content}>
      <ModalHelp
        isOpen={isOpenModal}
        onClose={ModalClose}
        title="Как набирать внутренние номера?"
        description="Выберите необходимую категорию для более точного результата поиска."
        block1={ModalContent.block1}
        block2={ModalContent.block2}
        block3={ModalContent.block3}
      />
      <div className={styles.emergency__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.emergency__title}>
          <h1>Экстренные телефонные номера</h1>
          <div>
            <RuleNumber
              label="Как набирать внутренние номера"
              icon={<img src={Help.src} />}
              onClick={ModalOpen}
            />
          </div>
        </div>
      </div>

      <div className={styles.emergency__content}>
        {data.mainBlocks.map((block, index) => (
          <div key={index} className={styles.block}>
            <BlockPhone
              phones={block.phones}
              title={block.title}
              icon={
                <Image
                  width={85}
                  height={85}
                  src={icons[block.icon as keyof typeof icons].src}
                  alt=""
                />
              }
            />
          </div>
        ))}
      </div>
      <div className={styles.block__footer}>
        <BlockPhone
          phones={data.securityBlock.phones}
          title={data.securityBlock.title}
          icon={
            <Image
              width={85}
              height={85}
              src={icons[data.securityBlock.icon as keyof typeof icons].src}
              alt=""
            />
          }
        />
      </div>
    </div>
  );
};

export default ClientNumber;
