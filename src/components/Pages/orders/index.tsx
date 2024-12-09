import Status from "@/constants/Status";
import FilterButtons from "../../Molecules/FilterButtons";
import MainTableOrganism from "../../Organisms/MainTableOrganism";
import styles from "./styles.module.scss";
import StatusIndicator from "../../Molecules/StatusIndicator";
import { useState } from "react";
import PageHeader from "../../Molecules/PageHeader";
const Orders = () => {
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);

  const filters = [
    { key: Status.VIEW_ALL, label: "View all" },
    { key: Status.OPEN, label: "Open" },
    { key: Status.PENDING, label: "Pending" },
    { key: Status.CLOSED, label: "Closed" },
    { key: Status.CANCELLED, label: "Cancelled" },
    { key: Status.OVERDUE, label: "Overdue" },
  ];

  const columns = [
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Order Amount",
      dataIndex: "orderAmount",
      key: "orderAmount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: "Customer name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Payment method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    invoice: `#${i + 1}`,
    date: "Mar 1, 2024",
    orderAmount: "EGP 1,000",
    status:
      i % 5 === 0
        ? Status.OPEN
        : i % 5 === 1
        ? Status.PENDING
        : i % 5 === 2
        ? Status.CLOSED
        : i % 5 === 3
        ? Status.CANCELLED
        : Status.OVERDUE,
    customerName: "Mohamed",
    paymentMethod: "Cash on delivery",
    Actions: "Actions",
  }));

  const filteredData =
    activeFilter === Status.VIEW_ALL
      ? allData
      : allData.filter((item) => item.status === activeFilter);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
  };

  return (
    <main className={styles.container}>
      <PageHeader title="Orders" />

      <MainTableOrganism
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
      >
        <FilterButtons
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </MainTableOrganism>
    </main>
  );
};

export default Orders;
