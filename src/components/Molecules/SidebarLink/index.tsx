import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { SidebarLinkProps } from "./types";

function SidebarLink({
  icon,
  label,
  isActive,
  onClick,
  className,
}: SidebarLinkProps) {
  return (
    <button
      className={`${styles.navbarLink} ${className} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <Icon name={icon} size={24} className={styles.icon} />
      <Text
        fontSize={16}
        fontFamily="font500"
        color={isActive ? "grey50" : "grey900"}
      >
        {label}
      </Text>
    </button>
  );
}

export default SidebarLink;
