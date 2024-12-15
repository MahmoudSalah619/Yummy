import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { StaticticsCardProps } from "./types";

function StaticticsCard({ label, value }: StaticticsCardProps) {
  return (
    <div className={styles.StaticticsCard}>
      <Text
        fontSize={14}
        fontFamily="font500"
        color="grey700"
        i18nKey={label}
      />

      <Text fontSize={30} color="grey900" fontFamily="font600">
        {value}
      </Text>
    </div>
  );
}

export default StaticticsCard;
