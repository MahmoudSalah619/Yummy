import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function PageHeader({
  title,
  children,
  fontSize = 36,
}: {
  title: string;
  children?: ReactNode;
  fontSize?: number;
}) {
  return (
    <div className={styles.container}>
      <Text fontSize={fontSize} fontFamily="font500" color="grey900">
        {title}
      </Text>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}

export default PageHeader;
