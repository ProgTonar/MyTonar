"use client";

import ButtonBack from "@/components/UI/ButtonBack/ButtonBack";
import styles from "./portals.module.scss";
import { useRouter } from "next/navigation";
import BlockPortals from "@/components/UI/BlockPortals/BlockPortals";
import IconDefault from "@/assets/images/IconDefault.svg";
import Image from "next/image";
import { PortalItem } from "@/data/portalsData";

interface ClientPortalsProps {
  portals: PortalItem[];
}

const ClientPortals = ({ portals }: ClientPortalsProps) => {
  const router = useRouter();

  return (
    <div className={styles.content}>
      <div className={styles.portals__header}>
        <div>
          <ButtonBack onClick={() => router.back()}>Назад</ButtonBack>
        </div>
        <div className={styles.portals__title}>
          <h1>Порталы</h1>
        </div>
      </div>

      <div className={styles.portals__content}>
        {portals.map((portal, index) => (
          <div key={index} className={styles.block}>
            <BlockPortals
              onClick={() => {}}
              title={portal.title}
              disabled={portal.disabled}
              icon={
                <Image width={85} height={85} src={IconDefault.src} alt="" />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPortals;
