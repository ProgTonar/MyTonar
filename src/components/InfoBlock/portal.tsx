"use client";

import styles from "./infoBlock.module.scss";
import { PortalItem } from "@/data/portalsData";

interface PortalProps {
  portals: PortalItem[];
}

const Portal = ({ portals = [] }: PortalProps) => {
  if (!portals || portals.length === 0) {
    return null;
  }

  return (
    <div className={styles.portal}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          paddingLeft: "13px",
        }}
      >
        <div className={styles.headIcon}></div>
        <div className={styles.headTitle}>Порталы</div>
      </div>
      <div className={styles.portal_item}>
        {portals.map((item, index) => (
          <div key={index}>
            {!item.disabled ? (
              <div tabIndex={-1} className={styles.item_block}>
                <div className={styles.portal_title}>{item.title}</div>
                <div className={styles.portal_icon}></div>
              </div>
            ) : (
              <div className={styles.disabled_block}>
                <div className={styles.portal_title}>{item.title}</div>
                <div className={styles.portal_description}>
                  {item.description}
                </div>
                <div className={styles.portal_icon}></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portal;
