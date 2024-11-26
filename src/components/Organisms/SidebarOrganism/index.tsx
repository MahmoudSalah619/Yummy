import { useState } from "react";
import styles from "./styles.module.scss";
import { LinkItem } from "./types";
import SidebarLink from "../../Molecules/SidebarLink";
import OrangeLogo from "@/src/assets/icons/OrangeLogo";
import Text from "../../Atoms/Text";

function SidebarOrganism() {
  const [activeKey, setActiveKey] = useState<string>("home");

  const generalLinks: LinkItem[] = [
    { icon: "home", label: "Home", key: "home" },
    { icon: "package", label: "Products", key: "products" },
    { icon: "orders", label: "Orders", key: "orders" },
    { icon: "promo", label: "Promo Codes", key: "promo" },
    { icon: "brand-profile", label: "Brand Profile", key: "brand-profile" },
  ];

  const supportLinks: LinkItem[] = [
    { icon: "contact-us", label: "Contact us", key: "contact-us" },
    { icon: "faq", label: "FAQ", key: "faq" },
  ];

  const handleNavClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <aside>
      <OrangeLogo />

      <div className={styles.sidebarLinksContainer}>
        <Text color="grey500" fontSize={16} className={styles.sidebarTitle}>
          General
        </Text>
        <div className={styles.sidebarLinks}>
          {generalLinks.map((link) => (
            <SidebarLink
              key={link.key}
              icon={link.icon}
              label={link.label}
              isActive={activeKey === link.key}
              onClick={() => handleNavClick(link.key)}
            />
          ))}
        </div>
      </div>

      <div className={styles.sidebarLinksContainer}>
        <Text color="grey500" fontSize={16} className={styles.sidebarTitle}>
          Support
        </Text>
        <div className={styles.sidebarLinks}>
          {supportLinks.map((link) => (
            <SidebarLink
              key={link.key}
              icon={link.icon}
              label={link.label}
              isActive={activeKey === link.key}
              onClick={() => handleNavClick(link.key)}
            />
          ))}
        </div>
      </div>

      <SidebarLink
        icon="signout"
        label="Sign out"
        className={styles.signoutContainer}
      />
    </aside>
  );
}

export default SidebarOrganism;
