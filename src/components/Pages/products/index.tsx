import styles from "./styles.module.scss";
import GeneralInfoOrganism from "../../Organisms/GeneralInfoOrganism";
import MediaOrganism from "../../Organisms/MediaOrganism";
import AddProductInfoOrganism from "../../Organisms/AddProductInfoOrganism";

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
    </main>
  );
}

export default Products;
