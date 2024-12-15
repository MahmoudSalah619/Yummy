import { useState } from "react";
import PageHeader from "@/src/components/Molecules/PageHeader";
import RevenueLineChart from "@/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/src/components/Molecules/OrdersLineChart";
import FilterOrganism from "../../FilterOrganism";
import MainTableOrganism from "../../MainTableOrganism";
import styles from "../styles.module.scss";
import FilterButtons from "@/src/components/Molecules/FilterButtons";
import DatePicker from "@/src/components/Molecules/DatePicker";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function AdminHomeView() {
  const { t } = useAutoCompleteTranslation();
  const [activeDateFilter, setActiveDateFilter] = useState("12months");

  const recentOrders = [
    {
      title: t("invoice_column"),
      dataIndex: "category",
      key: "category",
    },
    {
      title: t("merchant_name_column"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("date_column"),
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: t("order_amount_column"),
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: t("status_column"),
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  const topMerchants = [
    {
      title: t("merchant_name_column"),
      dataIndex: "category",
      key: "category",
    },
    {
      title: t("Orders"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("Revenue"),
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: t("Rating"),
      dataIndex: "stock",
      key: "stock",
    },
  ];

  const dateFilters = [
    { key: "12months", label: t("date_filter_12months") },
    { key: "30days", label: t("date_filter_30days") },
    { key: "7days", label: t("date_filter_7days") },
    { key: "24hours", label: t("date_filter_24hours") },
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
            headerTitle={t("Recent Orders")}
            columns={recentOrders}
            dataSource={ordersData}
            headerClassName={styles.headerContainer}
          >
            <FilterOrganism />
          </MainTableOrganism>
        </div>

        <MainTableOrganism
          headerTitle={t("Top Merchants by Revenue")}
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
