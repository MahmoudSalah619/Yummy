import { Input } from "antd";
import styles from "./styles.module.scss";

interface RangeInputProps {
  title: string;
}

function RangeInput({ title }: RangeInputProps) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <Input.Group compact className={styles.rangeInput}>
        <Input placeholder="From" style={{ width: "45%" }} />
        <span className={styles.rangeSeparator}> - </span>
        <Input placeholder="To" style={{ width: "45%" }} />
      </Input.Group>
    </div>
  );
}

export default RangeInput;
