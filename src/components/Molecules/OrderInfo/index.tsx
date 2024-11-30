import styles from "./styles.module.scss";
import { OrderInfoProps } from "./types";

export default function OrderInfo({
  orderTitle,
  orderStatus,
  markedStatus,
}: OrderInfoProps) {
  return (
    <div className={styles.cardLine}>
      <span>{orderTitle}</span>
      <span className={markedStatus ? styles.marked : ""}>{orderStatus}</span>
    </div>
  );
}
