import { useRoutes } from "react-router-dom";
import Home from "@/src/components/Pages/home";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";
import Products from "@/src/components/Pages/products";

export default function useGenerateRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Home />
        </DashboardLayout>
      ),
    },
    {
      path: "/products",
      element: (
        <DashboardLayout>
          <Products />
        </DashboardLayout>
      ),
    },
  ]);

  return routes;
}
