import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function OrderSummary() {
  const OrderSummaryList = [
    { prop: "subTotal", value: "2000" },
    { prop: "shipping", value: "100" },
    { prop: "taxes", value: "280" },
    { prop: "Discount", value: "100" },
    { prop: "Total", value: "2280" },
  ];

  return (
    <div className={styles.OrderInfo}>
      <Text fontSize={17} className={styles.OrderInfo_title}>
        Order Summary
      </Text>
      {OrderSummaryList.map((item) => {
        return (
          <div className={styles.orderInfo_line}>
            <Text>{item.prop}</Text>
            <Text>{item.value}</Text>
          </div>
        );
      })}
    </div>
  );
}

export default OrderSummary;
