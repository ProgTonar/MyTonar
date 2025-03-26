"use client";

import { useRouter } from "next/navigation";
import Button from "../UI/ButtonDefault/ButtonDefault";
import ButtonSecond from "../UI/ButtonSecond/Button";
import styles from "./infoBlock.module.scss";
import Expenses from "../UI/BlockExpenses/Expenses";
import Cheks from "../UI/BlockCheks/Cheks";

const Dining = () => {
  const router = useRouter();

  return (
    <div className={styles.dining}>
      <div className={styles.menuDiner} onClick={() => router.push("/dining")}>
        <div className={styles.head}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div className={styles.headIcon}></div>
            <div className={styles.headTitle}>Столовая</div>
          </div>
        </div>
        <div className={styles.description}>Меню обновится после 9:00</div>
        <div className={styles.button}>
          <Button onClick={() => {}}>Смотреть меню</Button>
        </div>
      </div>
      <div className={styles.detail}>
        <Expenses
          title="Расходы"
          date="01.01.2025"
          totalSum="1289 ₽"
          onClick={() => {}}
          disabled={false}
        />
        <Cheks
          title="Все чеки с детализацией"
          onClick={() => router.push("/cheks")}
          disabled={false}
          button={
            <ButtonSecond onClick={() => router.push("/cheks")}>
              ПОКАЗАТЬ
            </ButtonSecond>
          }
        />
      </div>
    </div>
  );
};

export default Dining;
