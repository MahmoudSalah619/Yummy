import GeneralInfoOrganism from "@/src/components/Organisms/GeneralInfoOrganism";
import MediaOrganism from "@/src/components/Organisms/MediaOrganism";
import styles from "./styles.module.scss";
import AddProductInfoOrganism from "@/src/components/Organisms/AddProductInfoOrganism";
import PriceAndQuantityOrganism from "@/src/components/Organisms/PriceAndQuantityOrganism";

function AddProduct() {
  return (
    <main className={styles.container}>
      <GeneralInfoOrganism />

      <MediaOrganism />

      <AddProductInfoOrganism
        cardTitle="Product Sizes"
        labelTitle="Size Value"
        buttonTitle="Add Another Size"
      />

      <AddProductInfoOrganism
        cardTitle="Product Colors"
        labelTitle="Color Value"
        buttonTitle="Add Another Color"
      />

      <PriceAndQuantityOrganism />
    </main>
  );
}

export default AddProduct;
