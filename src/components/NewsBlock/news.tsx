"use client";

import styles from "./newsBlock.module.scss";
import ButtonSecond from "../UI/ButtonSecond/Button";
import { useRouter } from "next/navigation";
import { INews } from "@/type/Types";
import Image from "next/image";

interface NewsProps {
  news: INews[];
}

const NewsBlock = ({ news }: NewsProps) => {
  const router = useRouter();

  const sortedNews = news.sort((a, b) => b.id - a.id);
  const newsItem = sortedNews[0];

  return (
    <>
      <div
        style={{ backgroundImage: `url(${newsItem.image_url})`, backgroundSize: "cover" }}
        className={styles.section}
      >
        <div className={styles.buttonHead}>
          <ButtonSecond onClick={() => router.push("/news")}>
            ВСЕ НОВОСТИ
          </ButtonSecond>
        </div>

        <div
          className={styles.overlay}
          onClick={() => router.push(`/news/${newsItem.id}`)}
        >
          <div className={styles.head}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div className={styles.headIcon}></div>
              <div className={styles.headTitle}>Новости</div>
            </div>
          </div>
          <div className={styles.footer}>{newsItem.title_one}</div>
        </div>
      </div>
    </>
  );
};

export default NewsBlock;
