import GeneralInfoOrganism from "@/src/components/Organisms/GeneralInfoOrganism";
import MediaOrganism from "@/src/components/Organisms/MediaOrganism";
import styles from "./styles.module.scss";
import AddProductInfoOrganism from "@/src/components/Organisms/AddProductInfoOrganism";
import PriceAndQuantityOrganism from "@/src/components/Organisms/PriceAndQuantityOrganism";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Button from "@/src/components/Atoms/Button";

function EditProduct() {
  return (
    <main className={styles.container}>
      <PageHeader title="Edit Product">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" variant="transparent-grey" />
        <Button title="Publish" />
      </PageHeader>

      <GeneralInfoOrganism showProductStatus />

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

export default EditProduct;