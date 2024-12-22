import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import StaticticsCard from "../../Molecules/StaticticsCard";
import styles from "./styles.module.scss";
import star from "../../../assets/icons/stars/yellowStar.svg";

function StaticticsCardsContent() {
  const Statictics = [
    { id: "1", label: "Revenue" as TranslationKeyEnum, value: "EGP 100,280" },
    { id: "2", label: "Orders" as TranslationKeyEnum, value: "1405" },
    { id: "3", label: "Orders in progress" as TranslationKeyEnum, value: "71" },
    {
      id: "2",
      label: "Avg. Rating" as TranslationKeyEnum,
      value: "4.4",
      icon: star,
    },
  ];

  return (
    <div className={styles.staticticsContent}>
      {Statictics.map((item) => {
        return (
          <StaticticsCard
            key={item.id}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
}

export default StaticticsCardsContent;
