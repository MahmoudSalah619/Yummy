import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
// import { OrderTimelineStatus } from "./types";

function OrderTimeline() {
  const OrderTimeLineArray = [
    {
      process: "Order Delivered",
      status: "Done",
      date: "27/5/2024",
    },
    {
      process: "Order Shipped",
      status: "Done",
      date: "27/5/2024",
    },
    {
      process: "Order Accepted",
      status: "pending",
      date: "27/5/2024",
    },
    {
      process: "Order Placed",
      status: "pending",
      date: "27/5/2024",
    },
  ];

  return (
    <CardWrapper>
      <div className={styles.OrderTimelineContent}>
        <Text className={styles.title}>Order Timeline</Text>
        {OrderTimeLineArray.map((item) => {
          return (
            <div
              className={`${styles.Timeline} ${item.status === "Done" ? styles.Done : styles.pending}`}
            >
              <Text>{item.process}</Text>
              <Text>{item.date}</Text>
            </div>
          );
        })}
      </div>
    </CardWrapper>
  );
}

export default OrderTimeline;
