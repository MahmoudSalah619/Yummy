import Image from "@/src/components/Atoms/Image";
import Text from "@/src/components/Atoms/Text";
import PublishedIcon from "@/src/assets/icons/products/published.svg";
import InReviewIcon from "@/src/assets/icons/products/upload-cloud.svg";
import RejectedIcon from "@/src/assets/icons/products/rejected.svg";
import InDraftIcon from "@/src/assets/icons/products/delete-icon.svg";
import InactiveIcon from "@/src/assets/icons/products/inactive.svg";
import styles from "./styles.module.scss";
import { StatusIndicatorProps } from "./types";
import {
  STATUS_PUBLISHED,
  STATUS_IN_REVIEW,
  STATUS_REJECTED,
  STATUS_IN_DRAFT,
  STATUS_INACTIVE,
} from "@/constants/Status";

function StatusIndicator({ status }: StatusIndicatorProps) {
  const iconMap: { [key: string]: string } = {
    [STATUS_PUBLISHED]: PublishedIcon,
    [STATUS_IN_REVIEW]: InReviewIcon,
    [STATUS_REJECTED]: RejectedIcon,
    [STATUS_IN_DRAFT]: InDraftIcon,
    [STATUS_INACTIVE]: InactiveIcon,
  };

  const statusStyleMap: { [key: string]: string } = {
    [STATUS_PUBLISHED]: styles.published,
    [STATUS_IN_REVIEW]: styles.inReview,
    [STATUS_REJECTED]: styles.rejected,
    [STATUS_IN_DRAFT]: styles.inDraft,
    [STATUS_INACTIVE]: styles.inactive,
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
