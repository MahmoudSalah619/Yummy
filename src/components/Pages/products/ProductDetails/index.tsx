import PageHeader from "@/src/components/Molecules/PageHeader";
import styles from "./styles.module.scss";

function ProductDetails() {
  return (
    <main className={styles.container}>
      <PageHeader title="Product Details" />
    </main>
  );
}

export default ProductDetails;
