import { Checkbox, Input } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import { CheckboxGroupProps } from "./types";
import Text from "../../Atoms/Text";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import Image from "../../Atoms/Image";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function CheckboxGroup({
  title,
  options,
  showSearch,
  onChange,
}: CheckboxGroupProps) {
  const { t } = useAutoCompleteTranslation();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (checkedValues: string[]) => {
    setSelectedValues(checkedValues);
    if (onChange) onChange(checkedValues);
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
          placeholder={t("type_to_search_placeholder")}
          className={styles.searchInput}
        />
      )}
      <Checkbox.Group
        className={styles.checkboxGroup}
        value={selectedValues}
        onChange={handleCheckboxChange}
      >
        {options.map((option, index) => (
          <Checkbox key={String(option + index)} value={option}>
            {option}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
}

export default CheckboxGroup;
