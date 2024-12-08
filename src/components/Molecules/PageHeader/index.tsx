import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function PageHeader({
  title,
  buttons,
}: {
  title: string;
  buttons?: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Text fontSize={36} fontFamily="font500" color="grey900">
        {title}
      </Text>
      {buttons}
    </div>
  );
}

export default PageHeader;
