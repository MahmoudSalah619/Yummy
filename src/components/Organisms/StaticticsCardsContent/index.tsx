import StaticticsCard from "../../Molecules/StaticticsCard";
import styles from "./styles.module.scss";

function StaticticsCardsContent() {
  return (
    <div className={styles.staticticsContent}>
      <StaticticsCard label="Total Orders" value="950" />
      <StaticticsCard label="Total Orders" value="EGP 120.000" />
      <StaticticsCard label="Total Orders" value="950" />
      <StaticticsCard label="Total Orders" value="EGP 120.000" />
    </div>
  );
}

export default StaticticsCardsContent;
