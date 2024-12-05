import styles from "./styles.module.scss";
import GeneralInfoOrganism from "../../Organisms/GeneralInfoOrganism";
import MediaOrganism from "../../Organisms/MediaOrganism";
import AddProductInfoOrganism from "../../Organisms/AddProductInfoOrganism";
import PriceAndQuantityOrganism from "../../Organisms/PriceAndQuantityOrganism";

function Products() {
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

export default Products;
