import { Input } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";

interface RangeInputProps {
  title: string;
}

function RangeInput({ title }: RangeInputProps) {
  return (
    <div className={styles.container}>
      <Text fontFamily="font500" color="grey900" fontSize={16}>
        {title}
      </Text>
      <Input.Group compact className={styles.rangeInputContainer}>
        <Input className={styles.rangeInput} placeholder="From" />
        <span className={styles.rangeSeparator}> - </span>
        <Input className={styles.rangeInput} placeholder="To" />
      </Input.Group>
    </div>
  );
}

export default RangeInput;
