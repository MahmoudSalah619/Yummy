import { ReactNode } from "react";

export interface TableRow {
  [key: string]: string;
}

export interface TableColumn {
  title: string | ReactNode;
  dataIndex: string;
  key: string;
  render?: (text: string, record: TableRow) => ReactNode;
}

export interface MainTableOrganismProps {
  headerTitle?: string;
  headerClassName?: string;
  columns: TableColumn[];
  dataSource: TableRow[];
  pageSize?: number;
  children?: ReactNode;
  rowOnClick?: () => void;
  enableSelection?: boolean;
  selectedRows?: string[];
  onSelectionChange?: (selectedKeys: string[]) => void;
}

export interface CustomPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
