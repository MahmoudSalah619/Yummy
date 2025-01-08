import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function PageHeader({
  title,
  children,
  fontSize = 36,
  childCon,
}: {
  title?: TranslationKeyEnum;
  children?: ReactNode;
  fontSize?: number;
  childCon?: string;
}) {
  const { t } = useAutoCompleteTranslation();
  return (
    <div className={styles.container}>
      {title && (
        <Text fontSize={fontSize} fontFamily="font500" color="grey900">
          {t(title)}
        </Text>
      )}
      <div className={`${styles.childrenContainer} ${childCon}`}>
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
