import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { LinkItem } from "./types";
import SidebarLink from "../../Molecules/SidebarLink";
import OrangeLogo from "@/src/assets/icons/OrangeLogo";
import Text from "../../Atoms/Text";

function SidebarOrganism() {
  const location = useLocation();
  const currentPath = location.pathname;

  const firstSegment = `/${currentPath.split("/")[1]}`;

  const generalLinks: LinkItem[] = [
    { icon: "home", label: "Home", href: "/" },
    { icon: "package", label: "Products", href: "/products" },
    { icon: "orders", label: "Orders", href: "/orders" },
    { icon: "promo", label: "Promo Codes", href: "/promo" },
    { icon: "brand-profile", label: "Brand Profile", href: "/brand-profile" },
  ];

  const supportLinks: LinkItem[] = [
    { icon: "contact-us", label: "Contact us", href: "/contact-us" },
    { icon: "faq", label: "FAQ", href: "/faq" },
  ];

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
              key={link.href}
              icon={link.icon}
              label={link.label}
              isActive={firstSegment === link.href}
              href={link.href}
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
              key={link.href}
              icon={link.icon}
              label={link.label}
              isActive={firstSegment === link.href}
              href={link.href}
            />
          ))}
        </div>
      </div>

      <SidebarLink
        icon="signout"
        label="Sign out"
        className={styles.signoutContainer}
        href="/login"
        isActive={firstSegment === "/login"}
      />
    </aside>
  );
}

export default SidebarOrganism;
