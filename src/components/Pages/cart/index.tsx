import React from "react";
import { Card, Divider, Input } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import img from "../../../assets/images/pancakes.jpg";
import Button from "../../Atoms/Button";
import TextInput from "../../Atoms/TextInput";

const cartItems = [
  {
    name: "Product 1",
    category: "Breakfast",
    date_ordered: "2023-10-01",
    date_delivered: "2023-10-05",
    price: "$10.00",
  },
  {
    name: "Product 2",
    category: "Lunch",
    date_ordered: "2023-10-02",
    date_delivered: "2023-10-06",
    price: "$20.00",
  },
  {
    name: "Product 3",
    category: "Lunch",
    date_ordered: "2023-10-02",
    date_delivered: "2023-10-06",
    price: "$20.00",
  },
  // Add more cartItems as needed
];

function Cart() {
  return (
    <div className={`${styles.container} container`}>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div style={{ flex: 0.5 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text fontSize={28}>Shopping Cart</Text>
            <Text fontSize={28}>3 Items</Text>
          </div>
          <Divider />

          {cartItems.map((order, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                position: "relative",
                width: "100%",
                marginBottom: 16,
                padding: 0,
                borderRadius: 16,
                display: "flex",
                gap: 16,
                height: 200,
              }}
            >
              <img
                src={img}
                alt="Product Image"
                style={{
                  objectFit: "contain",
                  height: "100%",
                  borderRadius: 16,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  paddingBlock: 20,
                }}
              >
                <p>
                  <strong>Product:</strong> {order.name}
                </p>
                <p>
                  <strong>Category:</strong> {order.category}
                </p>
                <p>
                  <strong>Price:</strong> {order.price}
                </p>
                <p>
                  <strong>Date Ordered:</strong> {order.date_ordered}
                </p>
                <p>
                  <strong>Date Delivered:</strong> {order.date_delivered}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  padding: 16,
                }}
              >
                <Button title="Remove" style={{ width: 100 }} />
                {/* <button className={styles.cardButton}>Remove</button> */}
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: 0.4 }}>
          <Text fontSize={28}>Checking out</Text>
          <Divider />

          <Card style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <h2>Shipping Information</h2>
            <div className={styles.inputGroup}>
              <TextInput placeholder="Name" label="Name" />
            </div>
            <div className={styles.inputGroup}>
              <TextInput placeholder="Email" label="Email" />
            </div>
            <div className={styles.inputGroup}>
              <TextInput placeholder="Phone" label="Phone" />
            </div>

            <div className={styles.inputGroup}>
              <TextInput placeholder="Address" label="Address" />
            </div>
            <div style={{ paddingBlock: 12 }} />
            <h2>Order Summary</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <strong style={{ width: 200 }}>Subtotal:</strong>{" "}
              <span>$30.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <strong style={{ width: 200 }}>Shipping:</strong>{" "}
              <span>$5.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <strong style={{ width: 200 }}>Tax:</strong> <span>$5.00</span>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBlock: 8,
              }}
            >
              <strong style={{ width: 200 }}>Total:</strong> <span>$35.00</span>
            </div>
            <Button
              title="Checkout"
              style={{ width: "40%", marginInlineStart: "auto", marginTop: 24 }}
            />
            {/* <button className={styles.cardButton}>Checkout</button> */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cart;
