import { Input } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import { RangeInputProps } from "./types";

function RangeInput({
  title,
  inputClassName,
  fromValue,
  toValue,
}: RangeInputProps) {
  return (
    <div className={styles.container}>
      {!!title && (
        <Text fontFamily="font500" color="grey900" fontSize={16}>
          {title}
        </Text>
      )}
      <Input.Group compact className={styles.rangeInputContainer}>
        <Input
          placeholder="From"
          className={inputClassName}
          value={fromValue}
        />
        <span className={styles.rangeSeparator}> - </span>
        <Input placeholder="To" className={inputClassName} value={toValue} />
      </Input.Group>
    </div>
  );
}

export default RangeInput;
