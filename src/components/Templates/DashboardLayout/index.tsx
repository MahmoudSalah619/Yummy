import { ReactNode } from "react";
import { Layout } from "antd";
import styles from "./styles.module.scss";
import NavbarOrganism from "../../Organisms/NavbarOrganism";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Layout className={styles.mainContainer}>
      <Header className={styles.headerStyle}>
        <NavbarOrganism />
      </Header>
      <Content className={styles.contentStyle}>{children}</Content>
    </Layout>
  );
}
