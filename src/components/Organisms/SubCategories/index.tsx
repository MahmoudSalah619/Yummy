import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import CardWrapper from "../../Wrappers/CardWrapper";
import SubCategory from "../../Molecules/SubCategory";
import CustomPagination from "../../Molecules/CustomPagination";
import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";

function SubCategoriesOrganism() {
  const [searchParams] = useSearchParams();

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

  console.log(searchParams.get("category"));

  const pageTitle = searchParams.get("category");

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <PageHeader childCon={styles.titleCon}>
        <div className={styles.titleCon}>
          <Text fontSize={24}>{pageTitle}</Text>
          <div className={styles.btnCon}>
            <Button
              title="Create new sub-category"
              variant="transparent-grey"
              onClick={() => navigate("/categories/add-sub-category")}
            />
            <Button
              title="Create new category"
              onClick={() => navigate("/categories/add-category")}
            />
          </div>
        </div>
      </PageHeader>
      <CardWrapper>
        <div className={styles.SubCategoriesContent}>
          <div className={styles.headerContaier}>
            <PageHeader fontSize={24} title="Sub Categories" />
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
    </div>
  );
}

export default SubCategoriesOrganism;
