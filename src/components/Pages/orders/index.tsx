import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Status from "@/constants/Status";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import FilterButtons from "../../Molecules/FilterButtons";
import MainTableOrganism from "../../Organisms/MainTableOrganism";
import styles from "./styles.module.scss";
import StatusIndicator from "../../Molecules/StatusIndicator";
import PageHeader from "../../Molecules/PageHeader";
import StaticticsCard from "../../Molecules/StaticticsCard";
import Button from "../../Atoms/Button";
import DatePicker from "../../Molecules/DatePicker";

function Orders() {
  const { role } = useGetUserInfo();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);
  const [activeDateFilter, setActiveDateFilter] = useState("12months");
  const navigate = useNavigate();

  const statistics = {
    seller: [
      { label: "Total Orders", value: "950" },
      { label: "Ordered Items", value: "1450" },
    ],
    admin: [
      { label: "Total Orders", value: "950" },
      { label: "Ordered Items", value: "1450" },
      { label: "Avg. order value", value: "EGP 1450" },
      { label: "Returns", value: "3" },
    ],
  };

  const filters = [
    { key: Status.VIEW_ALL, label: "View all" },
    { key: Status.OPEN, label: "Open" },
    { key: Status.PENDING, label: "Pending" },
    { key: Status.CLOSED, label: "Closed" },
    { key: Status.CANCELLED, label: "Cancelled" },
    { key: Status.OVERDUE, label: "Overdue" },
  ];

  const dateFilters = [
    { key: "12months", label: "12 months" },
    { key: "30days", label: "3 days" },
    { key: "7days", label: "7 days" },
    { key: "24hours", label: "24 hours" },
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
      render: () => (
        <div className={styles.actions}>
          <Button
            title="View"
            variant="transparet"
            fontColor="dark"
            onClick={() => {
              navigate("/orders/order-details");
            }}
          />
          <Button
            title="Edit"
            variant="transparet"
            fontColor="orange500"
            onClick={() => {
              navigate("/products/edit-product");
            }}
          />
        </div>
      ),
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

  const handleDateFilterChange = (key: string) => {
    setActiveDateFilter(key);
  };

  return (
    <main className={styles.container}>
      <PageHeader title="Orders" />

      <div className={styles.filterContainer}>
        <FilterButtons
          filters={dateFilters}
          activeFilter={activeDateFilter}
          onFilterChange={handleDateFilterChange}
          isGrayButtons
        />

        <DatePicker />
      </div>

      <div className={styles.staticticsContainer}>
        {statistics[role].map((item) => (
          <StaticticsCard label={item.label} value={item.value} />
        ))}
      </div>

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
}

export default Orders;
