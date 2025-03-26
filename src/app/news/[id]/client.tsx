"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "../News.module.scss";
import { useRouter } from "next/navigation";
import { INews } from "@/type/Types";

import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import ReactHtmlParser from "react-html-parser";


interface NewsProps {
  news: INews;
}

const NewClient = ({ news }: NewsProps) => {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = parse(dateString, "dd MMMM yyyy", new Date());
    return format(date, "dd MMMM yyyy", { locale: ru });
  };

  console.log(news);

  if (!news) {
    return <div>Новость не найдена</div>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.portals__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.portals__title}>
          <h1>{news.title_one}</h1>
        </div>
      </div>
      <div className={styles.background__section}>
        <div
          className={styles.new__image}
          style={{
            backgroundImage: `url(${news.image_url})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className={styles.new__content}>
          <div className={styles.section__date}>{formatDate(news.date)}</div>
          <div className={styles.subtitle}>{news.title_two}</div>
          <div className={styles.description}>{news.description}</div>
          <div className={styles.news__text}>
            {ReactHtmlParser(news.content)}
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewClient;
