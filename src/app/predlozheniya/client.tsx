"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./predlozheniya.module.scss";
import { useRouter } from "next/navigation";
import IconDefault from "@/assets/images/IconDefault.svg";
import Image from "next/image";
import BlockPredlozheniya from "@/components/UI/BlockPredlozheniya/BlockPredlozheniya";

const PredlozheniyaClient = () => {
  const router = useRouter();

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.title}>
          <h1>Предложения и замечания</h1>
        </div>
      </div>

      <div className={styles.predlozheniya__content}>
        <div className={styles.predlozheniya__header}>
          <p>Ваш вклад в разработку</p>
        </div>
        <div className={styles.predlozheniya__description}>
          <p>
            Вы можете повлиять на развитие приложения. Напишите разработчикам о
            найденных ошибках. Поделитесь, что стоит доработать, добавить или
            изменить. Все сообщения публикуются в анонимном формате.
          </p>
        </div>
        <div className={styles.portals__content}>
          <div className={styles.block}>
            <BlockPredlozheniya
              onClick={() => {}}
              title="Нашли ошибку или хотите написать замечание?"
              icon={
                <Image width={85} height={85} src={IconDefault.src} alt="" />
              }
            />
            <BlockPredlozheniya
              onClick={() => {}}
              title="Хочу поделиться предложением или добавить функционал"
              icon={
                <Image width={85} height={85} src={IconDefault.src} alt="" />
              }
            />
            <BlockPredlozheniya
              onClick={() => {}}
              title="Посмотреть все предложения и замечания"
              icon={
                <Image width={85} height={85} src={IconDefault.src} alt="" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredlozheniyaClient;
