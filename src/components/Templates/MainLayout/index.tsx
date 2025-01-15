import { ReactNode } from "react";
import styles from "./styles.module.scss";
import useAuth from "@/hooks/useAuth";
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }: { children: ReactNode }) {
  // useAuth();

  return (
    <div className={styles.mainContainer}>
      {children}

      <Toaster position="top-right"/>
    </div>
  );
}
