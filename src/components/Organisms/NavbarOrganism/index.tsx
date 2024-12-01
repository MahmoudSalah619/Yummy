import NavbarLink from "../../Molecules/NavbarLink";
import NavbarNotification from "../../Molecules/NavbarNotification";
import styles from "./styles.module.scss";

function NavbarOrganism() {
  return (
    <nav className={styles.navbar}>
      <NavbarLink />

      <NavbarNotification />
    </nav>
  );
}

export default NavbarOrganism;
