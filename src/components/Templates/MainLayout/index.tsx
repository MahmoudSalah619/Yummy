import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import styles from "./styles.module.scss";
import useAuth from "@/hooks/useAuth";

export default function MainLayout({ children }: { children: ReactNode }) {
  // useAuth();

  return (
    <div className={styles.mainContainer}>
      {children}

      <Toaster position="top-right" />
    </div>
  );
}
