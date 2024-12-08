import { useState } from "react";
import { Drawer } from "antd";
import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import FilterIcon from "@/src/assets/icons/home/filter.svg";
import FilterPopover from "../../Molecules/FilterPopover";

function FilterOrganism() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <main>
      <button onClick={toggleDrawer} className={styles.filterContainer}>
        <Image src={FilterIcon} alt="filter icon" width={20} height={20} />
        <Text fontFamily="font500" color="grey900" fontSize={14}>
          Filters
        </Text>
      </button>

      <Drawer
        title="Filter"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        className={styles.drawer}
        width={480}
      >
        <FilterPopover />
      </Drawer>
    </main>
  );
}

export default FilterOrganism;
