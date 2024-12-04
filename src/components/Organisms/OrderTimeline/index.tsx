import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import { OrderTimelineStatus } from "./types";

function OrderTimeline({ status, date }: OrderTimelineStatus) {
  return (
    <CardWrapper>
      <div className={styles.OrderTimelineContent}>
        <Text className={styles.title}>Order Timeline</Text>

        <div className={styles.Timeline}>
          <Text>{status}</Text>
          <Text>{date}</Text>
        </div>
        <div className={styles.Timeline}>
          <Text>{status}</Text>
          <Text>{date}</Text>
        </div>
        <div className={styles.Timeline}>
          <Text>{status}</Text>
          <Text>{date}</Text>
        </div>
        <div className={styles.Timeline}>
          <Text>{status}</Text>
          <Text>{date}</Text>
        </div>
      </div>
    </CardWrapper>
  );
}

export default OrderTimeline;
