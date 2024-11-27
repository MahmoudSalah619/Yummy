import { useState } from "react";
import { Popover } from "antd";
import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import NotificationIcon from "@/src/assets/icons/navbar/notification-icon.svg";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import NotificationItem from "../NotificationItem";
import Text from "../../Atoms/Text";

const notificationItems = [
  {
    message:
      "Congratulations, your product has been approved, users can buy it from app.",
    productName: "Product Name",
    imageSrc: AvatarImage,
  },
  {
    message: "Your product has been rejected",
    productName: "Product Name",
    imageSrc: AvatarImage,
  },
];

const notificationContent = (
  <div className={styles.notificationOverlay}>
    <div className={styles.notificationHeader}>
      <Text color="grey900" fontSize={18} fontFamily="font500">
        Notifications
      </Text>
      <button className={styles.markAsRead}>
        <Text color="orange500" fontSize={12} fontFamily="font500">
          Mark all as read
        </Text>
      </button>
    </div>
    <div className={styles.notificationList}>
      {notificationItems.map((item, index) => (
        <NotificationItem
          message={item.message}
          productName={item.productName}
          imageSrc={item.imageSrc}
          isLast={index === notificationItems.length - 1}
        />
      ))}
    </div>
  </div>
);
function NavbarNotification() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverVisibleChange = (visible: boolean) => {
    setIsPopoverVisible(visible);
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className={styles.navbarNotificationContainer}>
      <div
        className={`${styles.hideOverlay} ${isPopoverVisible && styles.show}`}
      />

      <Popover
        content={notificationContent}
        placement="bottomRight"
        trigger="click"
        overlayClassName={styles.notificationPopover}
        open={isPopoverVisible}
        onOpenChange={handlePopoverVisibleChange}
      >
        <button className={styles.btn}>
          <Image
            src={NotificationIcon}
            alt="notification icon"
            width={23.3}
            height={26.67}
            className={styles.notificationIcon}
          />
        </button>
      </Popover>

      <Image src={AvatarImage} alt="profile image" width={40} height={40} />
    </div>
  );
}

export default NavbarNotification;
