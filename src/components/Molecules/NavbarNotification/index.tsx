import { ShoppingCartOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function NavbarNotification() {
  const loggedOutMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );

  const loggedInMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/my_orders">My Orders</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Sign Out</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbarNotificationContainer}>
      <div className={styles.cartIconContainer}>
        <Link to="/cart">
          <ShoppingCartOutlined style={{ fontSize: 28 }} />
        </Link>
        <div className={styles.notificationIndicator}>3</div>
      </div>
      <Dropdown overlay={loggedInMenu} trigger={["click"]}>
        <div className={styles.profileIcon}>
          <p>MS</p>
        </div>
      </Dropdown>
    </div>
  );
}

export default NavbarNotification;
