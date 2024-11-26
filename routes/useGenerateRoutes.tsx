import { useRoutes } from "react-router-dom";
import Dashboard from "@/src/components/Pages/dashboard";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";

export default function useGenerateRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      ),
    },
  ]);

  return routes;
}
