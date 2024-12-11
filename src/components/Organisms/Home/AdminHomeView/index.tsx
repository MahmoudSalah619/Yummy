import { useState } from "react";
import PageHeader from "@/src/components/Molecules/PageHeader";
import RevenueLineChart from "@/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/src/components/Molecules/OrdersLineChart";
import FilterOrganism from "../../FilterOrganism";
import MainTableOrganism from "../../MainTableOrganism";
import styles from "../styles.module.scss";
import FilterButtons from "@/src/components/Molecules/FilterButtons";
import DatePicker from "@/src/components/Molecules/DatePicker";

function AdminHomeView() {
  const [activeDateFilter, setActiveDateFilter] = useState("12months");

  const recentOrders = [
    {
      title: "Invoice",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Merchant Name",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date",
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: "Order Amount",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Status",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];
  const topMerchants = [
    {
      title: "Merchant Name",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Orders",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Revenue",
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: "Rating",
      dataIndex: "stock",
      key: "stock",
    },
  ];

  const dateFilters = [
    { key: "12months", label: "12 months" },
    { key: "30days", label: "3 days" },
    { key: "7days", label: "7 days" },
    { key: "24hours", label: "24 hours" },
  ];

  const ordersData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product Name`,
    category: "Men, Hoodies",
    price: "1234",
    orders: "1234",
    stock: "1234",
    revenue: "EGP 123,456",
  }));
  const merchantData = Array.from({ length: 7 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product Name`,
    category: "Men, Hoodies",
    price: "1234",
    orders: "1234",
    stock: "1234",
    revenue: "EGP 123,456",
  }));

  const handleDateFilterChange = (key: string) => {
    setActiveDateFilter(key);
  };

  return (
    <>
      <PageHeader title="Dashboard" />
      <div className="flex-space-between">
        <FilterButtons
          filters={dateFilters}
          activeFilter={activeDateFilter}
          onFilterChange={handleDateFilterChange}
          isGrayButtons
        />

        <DatePicker />
      </div>
      <div className={styles.chartContainer}>
        <RevenueLineChart />
        <OrdersBarChart />
      </div>

      <div className="flex flex-gap-large flex-align-start">
        <div className="flex-grow-1">
          <MainTableOrganism
            headerTitle="Recent Orders"
            columns={recentOrders}
            dataSource={ordersData}
            headerClassName={styles.headerContainer}
          >
            <FilterOrganism />
          </MainTableOrganism>
        </div>

        <MainTableOrganism
          headerTitle="Top Merchants by Revenue"
          columns={topMerchants}
          dataSource={merchantData}
          showPagination={false}
          headerClassName={styles.headerContainer}
        />
      </div>
    </>
  );
}
export default AdminHomeView;
