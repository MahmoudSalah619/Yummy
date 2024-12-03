import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { OrderInfoProps } from "./types";

export default function OrderInfo({ title, status, isMarked }: OrderInfoProps) {
  return (
    <div className={styles.cardLine}>
      <Text>{title}</Text>
      <Text className={isMarked ? styles.marked : ""}>{status}</Text>
    </div>
  );
}
