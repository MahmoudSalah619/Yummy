import styles from "./styles.module.scss";
import GeneralInfoOrganism from "../../Organisms/GeneralInfoOrganism";
import MediaOrganism from "../../Organisms/MediaOrganism";

function Products() {
  return (
    <main className={styles.container}>
      <GeneralInfoOrganism />

      <MediaOrganism />
    </main>
  );
}

export default Products;
