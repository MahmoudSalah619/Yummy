import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CardWrapper from "../../Wrappers/CardWrapper";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function Faqs() {
  const text = `
  Yes, our platform offers integrated shipping solutions to make the order fulfillment process easier for sellers. Here’s how it works:

	1.	Shipping Partners: We partner with reliable logistics providers to handle deliveries. Sellers can choose from available shipping options directly through the dashboard.
	2.	Shipping Labels: Once an order is confirmed, you can generate and print shipping labels directly from the dashboard.
	3.	Tracking: The system automatically provides tracking numbers for each shipment, which can be shared with customers.
	4.	Pickup Services: Depending on your location, some logistics partners offer pickup services, saving you the hassle of dropping off packages.
	5.	Rates and Costs: Shipping rates are calculated based on the package dimensions, weight, and destination. You can view estimated costs during the label generation process.

To access this feature, ensure you’ve set up shipping preferences in your seller settings. For more details or assistance, check the Shipping and Fulfillment section of the dashboard.`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <Text fontSize={18}>
          Does the platform provide integrated shipping solutions?
        </Text>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: <Text fontSize={18}>How do I handle returns and exchanges?</Text>,
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: (
        <Text fontSize={18}>
          What should I do if my order doesn’t arrive or is damaged?
        </Text>
      ),
      children: <p>{text}</p>,
    },
  ];

  return (
    <CardWrapper>
      <Text fontSize={36} fontFamily="font500">
        Frequently Asked Questions
      </Text>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        className={styles.Collapse}
        items={items}
      />
    </CardWrapper>
  );
}

export default Faqs;
