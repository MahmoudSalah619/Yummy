import Image from "@/src/components/Atoms/Image";
import Text from "@/src/components/Atoms/Text";
import PublishedIcon from "@/src/assets/icons/products/published.svg";
import InReviewIcon from "@/src/assets/icons/products/upload-cloud.svg";
import RejectedIcon from "@/src/assets/icons/products/rejected.svg";
import InDraftIcon from "@/src/assets/icons/products/delete-icon.svg";
import InactiveIcon from "@/src/assets/icons/products/inactive.svg";
import styles from "./styles.module.scss";
import { StatusIndicatorProps } from "./types";

function StatusIndicator({ status }: StatusIndicatorProps) {
  const iconMap: { [key: string]: string } = {
    Published: PublishedIcon,
    "In review": InReviewIcon,
    Rejected: RejectedIcon,
    "In draft": InDraftIcon,
    Inactive: InactiveIcon,
  };

  const statusStyleMap: { [key: string]: string } = {
    Published: styles.published,
    "In review": styles.inReview,
    Rejected: styles.rejected,
    "In draft": styles.inDraft,
    Inactive: styles.inactive,
  };

  return (
    <div className={`${styles.statusIndicator} ${statusStyleMap[status]}`}>
      <Image
        src={iconMap[status] || InactiveIcon}
        alt={status}
        width={20}
        height={20}
      />
      <Text
        fontSize={12}
        fontFamily="font500"
        className={statusStyleMap[status] || styles.inactive}
      >
        {status}
      </Text>
    </div>
  );
}

export default StatusIndicator;
