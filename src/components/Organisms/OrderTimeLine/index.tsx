import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
// import { OrderTimelineStatus } from "./types";

function OrderTimeline() {
  const { t } = useAutoCompleteTranslation();

  const OrderTimeLineArray = [
    {
      process: t("order_delivered"),
      status: "Done",
      date: "27/5/2024",
    },
    {
      process: t("order_shipped"),
      status: "Done",
      date: "27/5/2024",
    },
    {
      process: t("order_accepted"),
      status: "pending",
      date: "27/5/2024",
    },
    {
      process: t("order_placed"),
      status: "pending",
      date: "27/5/2024",
    },
  ];

  return (
    <CardWrapper>
      <div className={styles.OrderTimelineContent}>
        <Text
          fontSize={18}
          fontFamily="font500"
          color="black"
          className={styles.title}
          i18nKey="order_timeline_title"
        />
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
