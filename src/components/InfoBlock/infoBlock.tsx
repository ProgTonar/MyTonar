"use client";

import Dining from "./diningRoom";
import styles from "./infoBlock.module.scss";
import ListBlock from "./list";
import Portal from "./portal";
import { PortalItem } from "@/data/portalsData";

interface InfoBlockProps {
  portals: PortalItem[];
}

const InfoBlock = ({ portals }: InfoBlockProps) => {
  return (
    <>
      <div className={styles.section}>
        <ListBlock />
        <Dining />
      </div>
      <Portal portals={portals} />
    </>
  );
};

export default InfoBlock;
