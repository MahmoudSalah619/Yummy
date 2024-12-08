import Image from "@/src/components/Atoms/Image";
import Text from "@/src/components/Atoms/Text";
import PublishedIcon from "@/src/assets/icons/products/published.svg";
import InReviewIcon from "@/src/assets/icons/products/upload-cloud.svg";
import RejectedIcon from "@/src/assets/icons/products/rejected.svg";
import InDraftIcon from "@/src/assets/icons/products/delete-icon.svg";
import InactiveIcon from "@/src/assets/icons/products/inactive.svg";
import styles from "./styles.module.scss";
import { StatusIndicatorProps } from "./types";
import Status from "@/constants/Status";

function StatusIndicator({ status }: StatusIndicatorProps) {
  const iconMap: { [key: string]: string } = {
    [Status.PUBLISHED]: PublishedIcon,
    [Status.IN_REVIEW]: InReviewIcon,
    [Status.REJECTED]: RejectedIcon,
    [Status.IN_DRAFT]: InDraftIcon,
    [Status.INACTIVE]: InactiveIcon,
  };

  const statusStyleMap: { [key: string]: string } = {
    [Status.PUBLISHED]: styles.published,
    [Status.IN_REVIEW]: styles.inReview,
    [Status.REJECTED]: styles.rejected,
    [Status.IN_DRAFT]: styles.inDraft,
    [Status.INACTIVE]: styles.inactive,
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
