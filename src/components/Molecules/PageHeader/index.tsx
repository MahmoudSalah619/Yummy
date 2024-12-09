import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Text fontSize={36} fontFamily="font500" color="grey900">
        {title}
      </Text>
      {children}
    </div>
  );
}

export default PageHeader;
