import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function TableHeader({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.headerContainer}>
      <Text color="dark" fontSize={22} fontFamily="font500">
        {title}
      </Text>
      {children}
    </div>
  );
}

export default TableHeader;
