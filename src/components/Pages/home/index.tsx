import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import MainTableOrganism from "../../Organisms/MainTableOrganism";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import Text from "../../Atoms/Text";
import { TableRow } from "../../Organisms/MainTableOrganism/types";

function Home() {
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
      />
    </main>
  );
}

export default Home;
