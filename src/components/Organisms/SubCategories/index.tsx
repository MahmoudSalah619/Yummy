import { useState } from "react";
import styles from "./styles.module.scss";
import CardWrapper from "../../Wrappers/CardWrapper";
import SubCategory from "../../Molecules/SubCategory";
import CustomPagination from "../../Molecules/CustomPagination";
import PageHeader from "../../Molecules/PageHeader";
import FilterOrganism from "../FilterOrganism";

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
        <div className={styles.headerContaier}>
          <PageHeader fontSize={24} title="Sub Categories">
            <FilterOrganism />
          </PageHeader>
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
