import { useState } from "react";
import { Divider } from "antd";
import CheckboxGroup from "../CheckboxGroup";
import RangeInput from "../RangeInput";
import styles from "./styles.module.scss";
import { FilterPopoverProps } from "./types";
import Button from "../../Atoms/Button";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function FilterPopover({ className }: FilterPopoverProps) {
  const { t } = useAutoCompleteTranslation();
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
        title={t("order_status_title")}
        options={[
          t("Select All"),
          t("Paid"),
          t("Cancelled"),
          t("In Progress"),
          t("Refunded"),
        ]}
        onChange={setOrderStatus}
      />

      <Divider className={styles.divider} />

      <CheckboxGroup
        title={t("payment_method_title")}
        options={[t("All"), t("Online Payment"), t("Cash on Delivery")]}
        onChange={setPaymentMethod}
      />

      <Divider className={styles.divider} />

      <RangeInput title={t("order_id_title")} />

      <Divider className={styles.divider} />

      <RangeInput title={t("order_value_title")} />

      <Divider className={styles.divider} />

      <CheckboxGroup
        title={t("customer_name_title")}
        showSearch
        options={["All", "Mohamed", "Salma"]}
        onChange={setCustomerName}
      />

      <Divider className={styles.divider} />

      <div className={styles.buttonsContainer}>
        <Button
          variant="transparent-grey"
          title="clear_all_button"
          isFullWidth
        />
        <Button onClick={handleConfirm} title="done_button" isFullWidth />
      </div>
    </div>
  );
}

export default FilterPopover;
