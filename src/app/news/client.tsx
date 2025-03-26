"use client";

import { useRouter } from "next/navigation";
import styles from "./News.module.scss";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import { INews } from "@/type/Types";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

interface NewsProps {
  news: INews[];
}

const NewsClient = ({ news }: NewsProps) => {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = parse(dateString, "dd MMMM yyyy", new Date());
    return format(date, "dd MMMM yyyy", { locale: ru });
  };
  return (
    <div className={styles.content}>
      <div className={styles.portals__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.portals__title}>
          <h1>Новости</h1>
        </div>
      </div>

      <div className={styles.news__content}>
        {news.map((newItem) => (
          <div
            key={newItem.id}
            className={styles.section}
            onClick={() => router.push(`/news/${newItem.id}`)}
          >
            <div key={newItem.id} className={styles.newBlock}>
              <div
                className={styles.Image}
                style={{
                  backgroundImage: `url(${newItem.image_url})`,
                  backgroundPosition: "center",
                }}
              ></div>
              <div className={styles.content}>
                <div className={styles.section__date}>
                  {formatDate(newItem.date)}
                </div>
                <div className={styles.section__title}>{newItem.title_one}</div>
                <div className={styles.section__description}>
                  {newItem.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsClient;
