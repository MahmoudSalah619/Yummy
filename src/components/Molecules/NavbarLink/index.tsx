import { useLocation, Link } from "react-router-dom";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import COLORS from "@/constants/COLORS";

function NavbarLink() {
  return (
    <div className={styles.navbarLink}>
      <div className={styles.homeContainer}>
        <Link to="/" className={styles.textStyle}>
          <Text
            fontFamily="font500"
            fontSize={44}
            i18nKey="Yummy."
            color={COLORS.primary}
          />
        </Link>
      </div>
    </div>
  );
}

export default NavbarLink;
