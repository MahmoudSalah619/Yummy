import styles from "./styles.module.scss";
import { Card, Input, Segmented } from "antd";
import img from "../../../assets/images/pancakes.jpg";
import toast from "react-hot-toast";

function Home() {
  const addToCart = (item: any) => {
    console.log("Add to Cart", item);
    toast.success("Product added to cart");
  };

  const addProduct = () => {
    console.log("Product added to cart");
  };
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to Food Delivery</h1>
        <h3 className={styles.description}>
          Order your favorite food from the comfort of your home.
        </h3>
      </div>
      <div className="container" style={{ padding: "0 20px" }}>
        <div className={styles.search}>
          <div style={{ flexGrow: 1 }}>
            <Input placeholder="Search Product" />
          </div>
          <Segmented
            options={["All", "Breakfast", "Lunch", "Dinner", "Drinks"]}
            onChange={(value) => {
              console.log(value); // string
            }}
            value="All"
          />

          <div>
            <button
              className={styles.cardButton}
              style={{ fontWeight: 600 }}
              onClick={addProduct}
            >
              Add Product
            </button>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Card
              key={item}
              className={styles.card}
              cover={<img src={img} alt="Product Image" />}
              hoverable
            >
              <div>
                <h2 className={styles.cardTitle}>Product Title</h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p className={styles.cardPrice}>$99.99</p>
                  <button
                    className={styles.cardButton}
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
