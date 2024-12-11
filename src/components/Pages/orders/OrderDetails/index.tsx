import PageHeader from "@/src/components/Molecules/PageHeader";
import OrderDetails from "@/src/components/Organisms/OrderDetails";
import FilterOrganism from "@/src/components/Organisms/FilterOrganism";
import DatePicker from "@/src/components/Molecules/DatePicker";
import styles from "./styles.module.scss";
import ItemsInOrder from "@/src/components/Organisms/ItemsInOrder";

function OrderDetailsPage() {
  return (
    <div className={styles.container}>
      <PageHeader title="Order #100">
        <DatePicker />
        <FilterOrganism />
      </PageHeader>
      <OrderDetails />
      <ItemsInOrder />
    </div>
  );
}

export default OrderDetailsPage;
