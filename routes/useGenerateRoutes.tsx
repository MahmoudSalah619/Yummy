import Dashboard from "@/src/components/Pages/dashboard";
import { useRoutes } from "react-router-dom";

export default function useGenerateRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return routes;
}
