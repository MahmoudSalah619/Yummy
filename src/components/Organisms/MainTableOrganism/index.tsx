import { useState } from "react";
import { Checkbox } from "antd";
import TableHeader from "../../Molecules/TableHeader";
import MainTable from "../../Molecules/MainTable";
import CustomPagination from "../../Molecules/CustomPagination";
import styles from "./styles.module.scss";
import { MainTableOrganismProps, TableRow } from "./types";

function MainTableOrganism({
  headerTitle,
  headerClassName,
  columns,
  dataSource,
  pageSize = 10,
  enableSelection = false,
  selectedRows = [],
  onSelectionChange,
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

  const handleSelectAll = (checked: boolean) => {
    const pageKeys = paginatedData.map((row) => row.key);
    if (checked) {
      const newSelectedRows = Array.from(
        new Set([...selectedRows, ...pageKeys])
      );
      onSelectionChange?.(newSelectedRows);
    } else {
      const newSelectedRows = selectedRows.filter(
        (key) => !pageKeys.includes(key)
      );
      onSelectionChange?.(newSelectedRows);
    }
  };

  const handleRowSelectionChange = (key: string) => {
    const newSelectedRows = selectedRows.includes(key)
      ? selectedRows.filter((row) => row !== key)
      : [...selectedRows, key];
    onSelectionChange?.(newSelectedRows);
  };

  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) => selectedRows.includes(row.key));

  const modifiedColumns = enableSelection
    ? [
        {
          title: (
            <Checkbox
              checked={isAllSelected}
              indeterminate={
                paginatedData.some((row) => selectedRows.includes(row.key)) &&
                !isAllSelected
              }
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
          ),
          dataIndex: "selection",
          key: "selection",
          render: (_: string, record: TableRow) => (
            <Checkbox
              checked={selectedRows.includes(record.key)}
              onChange={() => handleRowSelectionChange(record.key)}
            />
          ),
        },
        ...columns,
      ]
    : columns;

  return (
    <section className={styles.mainTable}>
      <TableHeader title={headerTitle} headerClassName={headerClassName}>
        {children}
      </TableHeader>
      <MainTable
        columns={modifiedColumns}
        dataSource={paginatedData}
        rowOnClick={rowOnClick}
      />
      <div className={styles.paginationContainer}>
        <CustomPagination
          total={dataSource?.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default MainTableOrganism;
