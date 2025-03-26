"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./profile.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BlockPortals from "@/components/UI/BlockPortals/BlockPortals";
import IconDefault from "@/assets/images/IconDefault.svg";
import Button from "@/components/UI/ButtonDefault/ButtonDefault";
import { ProfileItem } from "@/data/profileData";
import MobileBlock from "@/components/UI/MobileBlock/MobileBlock";
import ProfileInfoBlock from "@/components/ProfileInfoBlock/ProfileInfoBlock";
import ProfileUserInfo from "@/components/ProfileUserInfo/PtofileUserInfo";
import { IProperty } from "@/type/Types";
import ProfilePropertyInfo from "@/components/ProfilePropertyInfo/ProfilePropertyInfo";
import { useState } from "react";

interface ProfileCLientProps {
  profile: ProfileItem;
  property: IProperty[];
}

const ProfileCLient = ({ profile, property }: ProfileCLientProps) => {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(0);
  const [title, setTitle] = useState("Подробная информация");

  const handleTabClick = (index: number) => {
    setActiveTabs(index);
    if (index === 0) {
      setTitle("Подробная информация");
    } else if (index === 1) {
      setTitle("Пароль");
    } else if (index === 2) {
      setTitle("Закрепленное имущество");
    }
  };

  const count = property.length;
  return (
    <div className={styles.content}>
      <div className={styles.profile__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.profile__title}>
          <h1>Ваш профиль</h1>
        </div>
      </div>

      <div className={styles.profile__content}>
        <div className={styles.profile__headerBlock}>
          <div className={styles.profile__headPhoto}>
            <div className={styles.userPhoto}>
              <img
                className={styles.profile__photo}
                src={profile.avatar}
                alt=""
              />
              <div className={styles.profile__icon}></div>
            </div>

            <p>{profile.name}</p>
            <div className={styles.MobileBlock}>
              <MobileBlock
                onClick={() => {
                  router.push("/raschet_list");
                }}
                title="Закзать справку"
                icon={
                  <Image width={85} height={85} src={IconDefault.src} alt="" />
                }
              />
              <MobileBlock
                onClick={() => {
                  router.push("/raschet_list");
                }}
                title="Расчётный лист"
                icon={
                  <Image width={85} height={85} src={IconDefault.src} alt="" />
                }
              />
            </div>
          </div>
          <div className={styles.profile__headOrder}>
            <BlockPortals
              onClick={() => {
                router.push("/zakaz_spravki");
              }}
              title="Закзать справку"
              icon={
                <Image width={85} height={85} src={IconDefault.src} alt="" />
              }
            />
            <BlockPortals
              onClick={() => {
                router.push("/raschet_list");
              }}
              title="Расчётный лист"
              icon={
                <Image width={85} height={85} src={IconDefault.src} alt="" />
              }
            />
          </div>
        </div>
        <div className={styles.profile__infoBlock}>
          <div className={styles.button__header}>
            <Button
              onClick={() => {
                handleTabClick(0);
              }}
            >
              Инфо
            </Button>
            <Button
              disabled
              onClick={() => {
                handleTabClick(1);
              }}
            >
              Пароль
            </Button>
            <Button
              onClick={() => {
                handleTabClick(2);
              }}
            >
              Закрепленное имущество
            </Button>
            <div className={styles.mobile__visible}>
              <Button onClick={() => router.push("/predlozheniya")}>
                Ваши предлжения и пожелания
              </Button>
            </div>
          </div>
          <ProfileInfoBlock
            title={title}
            count={activeTabs === 2 && <div>Общее количество: {count}</div>}
          >
            {activeTabs === 0 && <ProfileUserInfo profile={profile} />}
            {activeTabs === 2 && <ProfilePropertyInfo property={property} />}
          </ProfileInfoBlock>
        </div>
      </div>
      <div
        className={styles.mobile__block}
        onClick={() => router.push("/predlozheniya")}
      >
        <h2>Ваши пожелания и замечания</h2>
        <p>
          Заметили ошибку или не хватает функций в приложении? Нажмите, чтобы
          написать нам.
        </p>
      </div>
    </div>
  );
};

export default ProfileCLient;
