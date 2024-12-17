import { Checkbox, Input } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import Image from "../../Atoms/Image";
import { CheckboxGroupProps } from "./types";

function CheckboxGroup({
  title,
  options,
  showSearch = false,
  onChange,
}: CheckboxGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (checkedValues: string[]) => {
    setSelectedValues(checkedValues as string[]);
    if (onChange) onChange(checkedValues as string[]);
  };

  return (
    <div className={styles.container}>
      <Text color="grey900" fontFamily="font500" fontSize={16}>
        {title}
      </Text>
      {showSearch && (
        <Input
          prefix={
            <Image src={SearchIcon} alt="search icon" width={20} height={20} />
          }
          placeholder="Type to Search"
          className={styles.searchInput}
        />
      )}
      <Checkbox.Group
        className={styles.checkboxGroup}
        value={selectedValues}
        onChange={handleCheckboxChange}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            className={styles.checkbox}
          >
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
}

export default CheckboxGroup;
