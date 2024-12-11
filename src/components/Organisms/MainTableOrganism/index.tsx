import { useState } from "react";
import TableHeader from "../../Molecules/TableHeader";
import MainTable from "../../Molecules/MainTable";
import CustomPagination from "../../Molecules/CustomPagination";
import styles from "./styles.module.scss";
import { MainTableOrganismProps } from "./types";

function MainTableOrganism({
  headerTitle,
  headerClassName,
  showPagination = true,
  columns,
  dataSource,
  pageSize = 10,
  children,
  rowOnClick,
}: MainTableOrganismProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = dataSource?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.mainTable}>
      <TableHeader title={headerTitle} headerClassName={headerClassName}>
        {children}
      </TableHeader>
      <MainTable
        columns={columns}
        dataSource={paginatedData}
        rowOnClick={rowOnClick}
      />
      {showPagination && (
        <div className={styles.paginationContainer}>
          <CustomPagination
            total={dataSource?.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  );
}

export default MainTableOrganism;
