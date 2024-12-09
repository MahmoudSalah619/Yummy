import { Table } from "antd";
import styles from "./styles.module.scss";
import { TableColumn, TableRow } from "../../Organisms/MainTableOrganism/types";

function MainTable({
  columns,
  dataSource,
  rowOnClick,
}: {
  columns: TableColumn[];
  dataSource: TableRow[];
  rowOnClick: () => void;
}) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className={styles.table}
      onRow={() => {
        return {
          onClick: () => {
            rowOnClick();
          },
        };
      }}
    />
  );
}

export default MainTable;
