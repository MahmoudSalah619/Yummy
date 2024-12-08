import { BarChart, Bar, XAxis, CartesianGrid } from "recharts";
import COLORS from "@/constants/COLORS";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";

function OrdersBarChart({ data }: { data: [] }) {
  const fakeData = [
    { month: "Jan", orders: 2400 },
    { month: "Feb", orders: 1398 },
    { month: "Mar", orders: 1398 },
    { month: "Apr", orders: 1398 },
    { month: "May", orders: 1398 },
    { month: "Jun", orders: 1398 },
    { month: "Jul", orders: 1398 },
    { month: "Aug", orders: 1398 },
    { month: "Sep", orders: 1398 },
    { month: "Oct", orders: 1398 },
    { month: "Nov", orders: 1398 },
    { month: "Dec", orders: 1398 },
  ];
  return (
    <div className={styles.container}>
      <Text fontFamily="font500" fontSize={22} color="grey900">
        Orders
      </Text>
      <BarChart
        barCategoryGap={2}
        barGap={0}
        width={493}
        height={135}
        data={data || fakeData}
      >
        {/* Add this for horizontal lines */}
        <CartesianGrid
          strokeDasharray={0}
          strokeOpacity={0.3}
          vertical={false}
        />
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <Bar dataKey="orders" fill={COLORS.primaryFF} radius={6} />
      </BarChart>
    </div>
  );
}

export default OrdersBarChart;
