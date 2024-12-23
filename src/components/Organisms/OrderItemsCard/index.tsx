import styles from "./styles.module.scss";
import item from "../../../assets/images/item.png";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";

function OrderItemsCard() {
  return (
    <div className={styles.ProductCardContent}>
      <div className={styles.ProductCard}>
        <div className={styles.ImageContent}>
          <Image src={item} width={100} height={100} alt="T-shirt" />
        </div>
        <div className={styles.FirstLine}>
          <Text>Te-shirt</Text>
          <Text color="grey200" className={styles.brandName}>
            BrandName
          </Text>
          <Text>m / red</Text>
        </div>
      </div>
      <Text>EGP : 1000 * 1 </Text>
      <Text>EGP 1000 </Text>
    </div>
  );
}

export default OrderItemsCard;
