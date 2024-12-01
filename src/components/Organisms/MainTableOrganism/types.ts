import { ReactNode } from "react";

export interface TableRow {
  // @ts-ignore
  [key: string]: string;
}

export interface TableColumn {
  title: string;
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
}

export interface CustomPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
