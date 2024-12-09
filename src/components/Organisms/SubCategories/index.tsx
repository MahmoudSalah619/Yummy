import { useState } from "react";
import styles from "./styles.module.scss";
import CardWrapper from "../../Wrappers/CardWrapper";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import SubCategory from "../../Molecules/SubCategory";
import CustomPagination from "../../Molecules/CustomPagination";
import icon from "../../../assets/icons/navbar/notification-icon.svg";
import Image from "../../Atoms/Image";

function SubCategories() {
  const [currentPage, setCurrentPage] = useState(1);
  const categories = [
    "T-shirts",
    "Hode",
    "Shoes",
    "Category Name",
    "Category Name",
    "Category Name",
    "Category Name",
    "Category Name",
  ];
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <CardWrapper>
      <div className={styles.SubCategoriesContent}>
        <div className={styles.SubCategoriesHeader}>
          <Text className={styles.titleStyle} fontSize={21}>
            Sub Categories
          </Text>
          <div className={styles.FiltersBtn}>
            <Image src={icon} width={20} height={20} alt="filters" />
            <Button color="dark" title="Filters" customStyle={styles.btn} />
          </div>
        </div>
        <div className={styles.categoriesList}>
          {categories.map((item) => {
            return <SubCategory Category={item} />;
          })}
        </div>
        <div className={styles.paginationContainer}>
          <CustomPagination
            total={10}
            pageSize={3}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </CardWrapper>
  );
}

export default SubCategories;
