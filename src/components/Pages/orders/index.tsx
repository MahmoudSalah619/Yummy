import React from "react";
import { Card, Divider } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import img from "../../../assets/images/pancakes.jpg";
import Button from "../../Atoms/Button";

const orders = [
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
  // Add more orders as needed
];

function Orders() {
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
        <div style={{ flex: 1 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text fontSize={28}>Order History</Text>
          </div>
          <Divider />

          {orders.map((order, index) => (
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
                // justifyContent: "start",
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
                <Button title="Check Details" />
                {/* <button className={styles.cardButton}>Remove</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
