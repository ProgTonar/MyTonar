"use client";

import NewsBlock from "@/components/NewsBlock/news";
import styles from "./home.module.scss";
import Buses from "@/components/Buses/Buses";
import InfoBlock from "@/components/InfoBlock/infoBlock";
import { PortalItem } from "@/data/portalsData";
import { INews, IRoute } from "@/type/Types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface HomeClientProps {
  busRoutes: IRoute[];
  portals: PortalItem[];
  news: INews[];
  title: boolean;
}

export default function HomeClient({
  busRoutes,
  portals,
  title,
  news,
}: HomeClientProps) {

  


  return (
    <div className={styles.content}>
      <NewsBlock news={news} />
      <InfoBlock portals={portals} />
      <Buses title={title} routes={busRoutes} />
    </div>
  );
}
