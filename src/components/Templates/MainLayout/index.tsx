import React from "react";
import { ToastContainer } from "react-toastify";
import styles from "./styles.module.scss";
import useAuth from "@/hooks/useAuth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuth();

  return (
    <div className={styles.mainContainer}>
      {children}

      <ToastContainer
        closeButton={false}
        position="top-center"
        autoClose={30000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
