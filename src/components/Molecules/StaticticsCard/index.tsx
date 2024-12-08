import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { StaticticsCardProps } from "./types";

function StaticticsCard({ label, value }: StaticticsCardProps) {
  return (
    <div className={styles.StaticticsCard}>
      <Text fontSize={14} fontFamily="font500">
        {label}
      </Text>
      <Text fontSize={17}>{value}</Text>
    </div>
  );
}

export default StaticticsCard;
