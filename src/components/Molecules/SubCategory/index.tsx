// import { Button } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { CategoriesList } from "./types";

function SubCategory({ Category }: CategoriesList) {
  return (
    <div className={styles.SubCategoryLine}>
      <Text className={styles.title}>{Category}</Text>
      <div className={styles.buttons}>
        <Button customStyle={styles.view} title="view" />
        <Button customStyle={styles.edit} title="Edit" />
      </div>
    </div>
  );
}

export default SubCategory;
