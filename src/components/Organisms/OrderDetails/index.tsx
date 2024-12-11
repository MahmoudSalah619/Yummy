import styles from "./styles.module.scss";
import OrderInfo from "../../Molecules/OrderInfo";
import Text from "../../Atoms/Text";

function OrderDetails() {
  const OrderDetailsArray = [
    {
      prop: "Order Status",
      value: "Shipped",
    },
    {
      prop: "Order Data",
      value: "23/20/2024",
    },
    {
      prop: "Customer Name",
      value: "Ahmed Amer",
    },
    {
      prop: "Customer Phone Number",
      value: "+200123485894",
    },
    {
      prop: "Customer address",
      value: "123 Main St., New Cairo, Cairo, Egypt",
    },
    {
      prop: "Shipping Method",
      value: "Express Delivery",
    },
    {
      prop: "Payment Method",
      value: "Online Payment",
    },
  ];
  return (
    <div className={styles.OrderDetailsCard}>
      <div className={styles.OrderDetailsTitle}>
        <Text>Order Details</Text>
      </div>
      {OrderDetailsArray.map((order, index) => {
        return (
          <OrderInfo
            title={order.prop}
            status={order.value}
            isMarked={index === 0 && true}
          />
        );
      })}
    </div>
  );
}

export default OrderDetails;
