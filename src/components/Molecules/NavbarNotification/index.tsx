import { ShoppingCartOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NavbarNotification = () => {
  const loggedOutMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );

  const loggedInMenu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>My Orders</Menu.Item>
      <Menu.Item>Sign Out</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbarNotificationContainer}>
      <div className={styles.cartIconContainer}>
        <ShoppingCartOutlined style={{ fontSize: 24 }} />
        <div className={styles.notificationIndicator}>3</div>
      </div>
      <Dropdown overlay={loggedInMenu} trigger={["click"]}>
        <div className={styles.profileIcon}>
          <p>MS</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default NavbarNotification;
