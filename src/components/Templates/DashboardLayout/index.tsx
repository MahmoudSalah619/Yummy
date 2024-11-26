import { ReactNode } from "react";
import { Layout } from "antd";
import styles from "./styles.module.scss";
import SidebarOrganism from "../../Organisms/SidebarOrganism";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Layout className={styles.mainContainer}>
      <Sider width="20%" className={styles.siderStyle}>
        <SidebarOrganism />
      </Sider>
      <Layout>
        <Header className={styles.headerStyle}>Header</Header>
        <Content className={styles.contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}
