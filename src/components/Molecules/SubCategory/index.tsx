// import { Button } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { CategoriesList } from "./types";

function SubCategory({ Category }: CategoriesList) {
  return (
    <div className={styles.SubCategoryLine}>
      <Text fontSize={14} fontFamily="font400" color="grey900">
        {Category}
      </Text>
      <div className={styles.buttons}>
        <Button
          variant="transparet"
          fontSize={14}
          fontFamily="font500"
          color="black"
          title="view_button"
        />
        <Button
          fontSize={14}
          fontFamily="font500"
          variant="transparet"
          fontColor="primaryFF"
          title="Edit"
        />
      </div>
    </div>
  );
}

export default SubCategory;
