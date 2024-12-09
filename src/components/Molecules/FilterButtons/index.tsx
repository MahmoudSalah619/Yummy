import { Button } from "antd";
import styles from "./styles.module.scss";
import { FilterButtonsProps } from "./types";

function FilterButtons({
  filters,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div>
      {filters.map((filter, index) => {
        const firstItem = index === 0;
        const lastItem = index === filters.length - 1;

        return (
          <Button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`${
              activeFilter === filter.key && styles.activeFilterButton
            } ${firstItem && styles.firstFilterButton} ${
              lastItem && styles.lastFilterButton
            }`}
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
