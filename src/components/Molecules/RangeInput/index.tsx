import { Input } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import { RangeInputProps } from "./types";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function RangeInput({
  title,
  inputClassName,
  fromValue,
  toValue,
}: RangeInputProps) {
  const { t } = useAutoCompleteTranslation();
  return (
    <div className={styles.container}>
      {!!title && (
        <Text fontFamily="font500" color="grey900" fontSize={16}>
          {title}
        </Text>
      )}
      <Input.Group compact className={styles.rangeInputContainer}>
        <Input
          placeholder={t("From")}
          className={inputClassName}
          value={fromValue}
        />
        <span className={styles.rangeSeparator}> - </span>
        <Input
          placeholder={t("To")}
          className={inputClassName}
          value={toValue}
        />
      </Input.Group>
    </div>
  );
}

export default RangeInput;
