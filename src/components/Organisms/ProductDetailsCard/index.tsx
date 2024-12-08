import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import item from "../../../assets/images/item.png";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { CardDetails } from "./types";

function ProductDetailsCard({ title, price, status, date }: CardDetails) {
  return (
    <CardWrapper>
      <div className={styles.ProductCardContent}>
        <div className={styles.ImageContent}>
          <Image src={item} width={100} height={100} alt="T-shirt" />
        </div>
        <div className={styles.FirstLine}>
          <Text>{title}</Text>
          <Button title="Edit Product" customStyle={styles.BorderBtn} />
        </div>
        <div className={styles.SecondLine}>
          <Text>Price: {price}</Text>
          <Text>Status: {status}</Text>
          <Text>Date Created: {date}</Text>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProductDetailsCard;
