import styles from "./styles.module.scss";
import MainTableOrganism from "../../Organisms/MainTableOrganism";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import FilterOrganism from "../../Organisms/FilterOrganism";
import SelectDates from "../../Molecules/DatePicker";
import ProductName from "../../Molecules/ProductName";

function Home() {
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
    <main>
      <MainTableOrganism
        headerTitle="Best Sellers"
        columns={columns}
        dataSource={data}
        headerClassName={styles.headerContainer}
      >
        <FilterOrganism />
        <SelectDates />
      </MainTableOrganism>
    </main>
  );
}

export default Home;
