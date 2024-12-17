import PageHeader from "@/src/components/Molecules/PageHeader";
import DatePicker from "@/src/components/Molecules/DatePicker";
import RevenueLineChart from "@/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/src/components/Molecules/OrdersLineChart";
import ProductName from "@/src/components/Molecules/ProductName";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import FilterOrganism from "../../FilterOrganism";
import StaticticsCardsContent from "../../StaticticsCardsContent";
import MainTableOrganism from "../../MainTableOrganism";
import styles from "../styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function SellerHomeView() {
  const { t } = useAutoCompleteTranslation();
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
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  const data = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product Name`,
    category: "Men, Hoodies",
    price: "1234",
    orders: "1234",
    stock: "1234",
    revenue: "EGP 123,456",
  }));
  return (
    <>
      <PageHeader title="Dashboard">
        <FilterOrganism />
        <DatePicker />
      </PageHeader>

      <StaticticsCardsContent />

      <div className={styles.chartContainer}>
        <RevenueLineChart />
        <OrdersBarChart />
      </div>

      <MainTableOrganism
        headerTitle={t("Best Sellers")}
        columns={columns}
        dataSource={data}
        headerClassName={styles.headerContainer}
      >
        <FilterOrganism />
      </MainTableOrganism>
    </>
  );
}
export default SellerHomeView;
