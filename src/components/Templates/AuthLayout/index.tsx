import { Layout } from "antd";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Logo from "@/src/assets/images/Logo.png";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";

function AuthLayout({
  children,
  spaceTop = "medium",
}: {
  children: ReactNode;
  spaceTop?: "medium" | "large";
}) {
  return (
    <Layout
      style={{ backgroundColor: "#fff", height: "100%", minHeight: "100vh" }}
    >
      <div className={`${styles.container} ${styles[spaceTop]}`}>
        <Text
          className={styles.title}
          type="heading"
          fontSize={84}
          color="primary"
        >
          Yummy.
        </Text>
        {children}
      </div>
    </Layout>
  );
}

export default AuthLayout;
