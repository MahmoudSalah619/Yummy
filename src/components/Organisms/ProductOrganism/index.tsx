import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilterBar from "../../Molecules/SearchFilterBar";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import StatusIndicator from "../../Molecules/StatusIndicator";
import DateTimeDisplay from "../../Molecules/DateTimeDisplay";
import ProductName from "../../Molecules/ProductName";
import Status from "@/constants/Status";
import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import FilterButtons from "../../Molecules/FilterButtons";

function ProductOrganism() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);

  const filters = [
    { key: Status.VIEW_ALL, label: "View all" },
    { key: Status.PUBLISHED, label: "Published" },
    { key: Status.IN_REVIEW, label: "In review" },
    { key: Status.REJECTED, label: "Rejected" },
    { key: Status.IN_DRAFT, label: "In draft" },
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
        ? Status.PUBLISHED
        : i % 5 === 1
          ? Status.IN_REVIEW
          : i % 5 === 2
            ? Status.REJECTED
            : i % 5 === 3
              ? Status.IN_DRAFT
              : Status.INACTIVE,
    revenue: "EGP 123,456",
  }));

  const filteredData =
    activeFilter === Status.VIEW_ALL
      ? allData
      : allData.filter((item) => item.status === activeFilter);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
  };

  return (
    <section className={styles.container}>
      <PageHeader title="Products">
        <Button title="Export as CSV" variant="transparent-grey" />
        <Button title="Import as CSV" variant="transparent-grey" />
        <Button title="Add Product" onClick={() => navigate("add-product")} />
      </PageHeader>

      <SearchFilterBar />

      <MainTableOrganism
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
        rowOnClick={() => navigate("product-details")}
      >
        <FilterButtons
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </MainTableOrganism>
    </section>
  );
}

export default ProductOrganism;
