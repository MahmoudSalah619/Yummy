import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import NotFoundProduct from "@/src/assets/icons/NotFoundProduct.svg";
import Text from "../../Atoms/Text";

function ProductNotFound() {
  return (
    <div className={styles.NotFoundContent}>
      <Image src={NotFoundProduct} alt="hallow" width={100} height={100} />
      <Text fontFamily="font500">You have no products yet</Text>
      <Text>When you add products they will appear here.</Text>
      <button>Button</button>
    </div>
  );
}

export default ProductNotFound;
