import { useState } from "react";
import SearchFilterBar from "../../Molecules/SearchFilterBar";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import { TableRow } from "@/src/components/Organisms/MainTableOrganism/types";
import Image from "@/src/components/Atoms/Image";
import Text from "@/src/components/Atoms/Text";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import { Button, Space } from "antd";
const AddProductOrganism = () => {
  const [activeFilter, setActiveFilter] = useState("view-all");

  const filters = [
    { key: "view-all", label: "View all" },
    { key: "published", label: "Published" },
    { key: "in-review", label: "In review" },
    { key: "rejected", label: "Rejected" },
    { key: "in-draft", label: "In draft" },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text: string, record: TableRow) => (
        <div className={styles.productNameCell}>
          <Image
            src={AvatarImage}
            alt={record.productName}
            width={30}
            height={30}
            className={styles.productImage}
          />
          <Text fontSize={14} fontFamily="font500" color="dark">
            {text}
          </Text>
        </div>
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
    },
    {
      title: "Published on",
      dataIndex: "publishedOn",
      key: "publishedOn",
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
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  const data = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product ${i + 1}`,
    category: "Men, Hoodies",
    createdOn: "Created on",
    publishedOn: "Published on",
    price: "1234",
    orders: "1234",
    stock: "1234",
    status: "Published",
    revenue: "EGP 123,456",
  }));

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
  };

  return (
    <section className={styles.container}>
      <SearchFilterBar />

      <MainTableOrganism
        columns={columns}
        dataSource={data}
        headerClassName={styles.headerContainer}
      >
        <Space>
          {filters.map((filter, index) => {
            const firstItem = index === 0;
            const lastItem = index === filters.length - 1;

            return (
              <Button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={
                  activeFilter === filter.key ? styles.activeFilterButton : ""
                }
              >
                {filter.label}
              </Button>
            );
          })}
        </Space>
      </MainTableOrganism>
    </section>
  );
};

export default AddProductOrganism;
