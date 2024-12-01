import { useRoutes } from "react-router-dom";
import Dashboard from "@/src/components/Pages/dashboard";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";
import Login from "@/src/components/Pages/Auth/Login";
import AuthLayout from "@/src/components/Templates/AuthLayout";
import ForgetPassword from "@/src/components/Pages/Auth/ForgetPassword";
import SignUp from "@/src/components/Pages/Auth/SignUp";

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
    {
      path: "/login",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/forget-password",
      element: (
        <AuthLayout>
          <ForgetPassword />
        </AuthLayout>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      ),
    },
  ]);

  return routes;
}
