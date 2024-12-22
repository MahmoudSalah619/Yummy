import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { StaticticsCardProps } from "./types";

function StaticticsCard({ label, value, icon }: StaticticsCardProps) {
  return (
    <div className={styles.StaticticsCard}>
      <Text
        fontSize={14}
        fontFamily="font500"
        color="grey700"
        i18nKey={label}
      />

      <div className={styles.iconCon}>
        {icon && <Image alt="icon" src={icon} width={40} height={40} />}
        <Text fontSize={30} color="grey900" fontFamily="font600">
          {value}
        </Text>
      </div>
    </div>
  );
}

export default StaticticsCard;
