import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Layout className={styles.mainContainer}>
      <Sider width="25%" className={styles.siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header className={styles.headerStyle}>Header</Header>
        <Content className={styles.contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}
