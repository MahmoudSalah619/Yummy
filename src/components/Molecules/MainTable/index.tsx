import { Table } from "antd";
import styles from "./styles.module.scss";
import { TableColumn, TableRow } from "../../Organisms/MainTableOrganism/types";

function MainTable({
  columns,
  dataSource,
}: {
  columns: TableColumn[];
  dataSource: TableRow[];
}) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className={styles.table}
    />
  );
}

export default MainTable;
