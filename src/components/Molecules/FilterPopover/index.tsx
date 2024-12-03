import { useState } from "react";
import { Divider } from "antd";
import CheckboxGroup from "../CheckboxGroup";
import RangeInput from "../RangeInput";
import styles from "./styles.module.scss";
import { FilterPopoverProps } from "./types";
import Button from "../../Atoms/Button";

function FilterPopover({ className }: FilterPopoverProps) {
  const [orderStatus, setOrderStatus] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState<string[]>([]);

  const handleConfirm = () => {
    console.log("Selected Order Status:", orderStatus);
    console.log("Selected Payment Methods:", paymentMethod);
    console.log("Selected Customer Names:", customerName);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <CheckboxGroup
        title="Order Status"
        options={["Select All", "Paid", "Cancelled", "In Progress", "Refunded"]}
        onChange={setOrderStatus}
      />

      <Divider className={styles.divider} />

      <CheckboxGroup
        title="Payment Method"
        options={["All", "Online Payment", "Cash on Delivery"]}
        onChange={setPaymentMethod}
      />

      <Divider className={styles.divider} />

      <RangeInput title="Order ID" />

      <Divider className={styles.divider} />

      <RangeInput title="Order Value" />

      <Divider className={styles.divider} />

      <CheckboxGroup
        title="Customer Name"
        showSearch
        options={["All", "Mohamed", "Salma"]}
        onChange={setCustomerName}
      />

      <Divider className={styles.divider} />

      <div className={styles.buttonsContainer}>
        <Button variant="transparent-grey" title="Clear all" isFullWidth />
        <Button onClick={handleConfirm} title="Done" isFullWidth />
      </div>
    </div>
  );
}

export default FilterPopover;
