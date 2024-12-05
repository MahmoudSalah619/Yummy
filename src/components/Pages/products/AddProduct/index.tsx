import GeneralInfoOrganism from "@/src/components/Organisms/GeneralInfoOrganism";
import MediaOrganism from "@/src/components/Organisms/MediaOrganism";
import styles from "./styles.module.scss";

function AddProduct() {
  return (
    <main className={styles.container}>
      <GeneralInfoOrganism />

      <MediaOrganism />
    </main>
  );
}

export default AddProduct;
