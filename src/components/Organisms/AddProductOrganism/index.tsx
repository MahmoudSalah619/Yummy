import { useState } from "react";
import { Button } from "antd";
import SearchFilterBar from "../../Molecules/SearchFilterBar";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import StatusIndicator from "../../Molecules/StatusIndicator";
import DateTimeDisplay from "../../Molecules/DateTimeDisplay";
import ProductName from "../../Molecules/ProductName";
import {
  STATUS_VIEW_ALL,
  STATUS_PUBLISHED,
  STATUS_IN_REVIEW,
  STATUS_REJECTED,
  STATUS_IN_DRAFT,
  STATUS_INACTIVE,
} from "@/constants/Status";

function AddProductOrganism() {
  const [activeFilter, setActiveFilter] = useState(STATUS_VIEW_ALL);

  const filters = [
    { key: STATUS_VIEW_ALL, label: "View all" },
    { key: STATUS_PUBLISHED, label: "Published" },
    { key: STATUS_IN_REVIEW, label: "In review" },
    { key: STATUS_REJECTED, label: "Rejected" },
    { key: STATUS_IN_DRAFT, label: "In draft" },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text: string) => (
        <ProductName text={text} AvatarImage={AvatarImage} />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Created on",
      dataIndex: "createdOn",
      key: "createdOn",
      render: () => <DateTimeDisplay date="20 May 2024" time="12:00 PM" />,
    },
    {
      title: "Published on",
      dataIndex: "publishedOn",
      key: "publishedOn",
      render: () => <DateTimeDisplay date="20 May 2024" time="12:00 PM" />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product ${i + 1}`,
    category: "Men, Hoodies",
    createdOn: "20 May 2024 12:00 PM",
    publishedOn: "20 May 2024 12:00 PM",
    price: "1234",
    orders: "1234",
    stock: "1234",
    status:
      i % 5 === 0
        ? STATUS_PUBLISHED
        : i % 5 === 1
          ? STATUS_IN_REVIEW
          : i % 5 === 2
            ? STATUS_REJECTED
            : i % 5 === 3
              ? STATUS_IN_DRAFT
              : STATUS_INACTIVE,
    revenue: "EGP 123,456",
  }));

  const filteredData =
    activeFilter === STATUS_VIEW_ALL
      ? allData
      : allData.filter((item) => item.status === activeFilter);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
  };

  return (
    <section className={styles.container}>
      <SearchFilterBar />

      <MainTableOrganism
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
      >
        <div>
          {filters.map((filter, index) => {
            const firstItem = index === 0;
            const lastItem = index === filters.length - 1;

            return (
              <Button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`${
                  activeFilter === filter.key && styles.activeFilterButton
                } ${firstItem && styles.firstFilterButton} ${
                  lastItem && styles.lastFilterButton
                }`}
              >
                {filter.label}
              </Button>
            );
          })}
        </div>
      </MainTableOrganism>
    </section>
  );
}

export default AddProductOrganism;
