import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function PageHeader({
  title,
  children,
  fontSize = 36,
}: {
  title: TranslationKeyEnum;
  children?: ReactNode;
  fontSize?: number;
}) {
  const { t } = useAutoCompleteTranslation();
  return (
    <div className={styles.container}>
      <Text fontSize={fontSize} fontFamily="font500" color="grey900">
        {t(title)}
      </Text>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}

export default PageHeader;
