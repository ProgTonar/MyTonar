import { useRouter } from "next/navigation";
import Button from "../UI/ButtonDefault/ButtonDefault";
import styles from "./infoBlock.module.scss";

const ListBlock = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/raschet_list")} className={styles.list}>
      <div className={styles.head}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div className={styles.headIcon}></div>
          <div className={styles.headTitle}>Ваш расчетный лист</div>
        </div>
      </div>
      <div className={styles.description}>
        Открывается после начисления зарплаты
      </div>
      <div className={styles.button}>
        <Button onClick={() => {}}>Смотреть лист</Button>
      </div>
    </div>
  );
};

export default ListBlock;
