import NavbarLink from "../../Molecules/NavbarLink";
import NavbarNotification from "../../Molecules/NavbarNotification";
import styles from "./styles.module.scss";

function NavbarOrganism() {
  return (
    <nav className={styles.navbar}>
      <NavbarLink />
      <div className={styles.navbarRight}>
        <NavbarNotification />
      </div>
    </nav>
  );
}

export default NavbarOrganism;
