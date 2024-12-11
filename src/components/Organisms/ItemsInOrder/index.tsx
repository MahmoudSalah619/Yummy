import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import OrderItemsCard from "../OrderItemsCard";
import OrderSummary from "../OrderSummary";
import styles from "./styles.module.scss";

function ItemsInOrder() {
  return (
    <CardWrapper>
      <div className={styles.OrdersList}>
        <Text className={styles.title}>items in order</Text>
        <OrderItemsCard />
        <OrderItemsCard />
        <OrderSummary />
      </div>
    </CardWrapper>
  );
}

export default ItemsInOrder;
