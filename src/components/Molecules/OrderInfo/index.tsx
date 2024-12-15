import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { OrderInfoProps } from "./types";

export default function OrderInfo({ title, status, isMarked }: OrderInfoProps) {
  return (
    <div className={styles.cardLine}>
      <Text fontSize={16} fontFamily="font500" color="grey900">
        {title}
      </Text>
      <Text
        fontSize={16}
        fontFamily="font500"
        color="grey900"
        className={isMarked ? styles.marked : ""}
      >
        {status}
      </Text>
    </div>
  );
}
