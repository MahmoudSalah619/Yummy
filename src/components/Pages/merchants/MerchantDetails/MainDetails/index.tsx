import StaticticsCardsContent from "@/src/components/Organisms/StaticticsCardsContent";
import styles from "./styles.module.scss";
import RevenueLineChart from "@/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/src/components/Molecules/OrdersLineChart";

export default function MainDetails() {
  return (
    <div>
      <StaticticsCardsContent />
      <div className={styles.chartContainer}>
        <RevenueLineChart />
        <OrdersBarChart />
      </div>
    </div>
  );
}
