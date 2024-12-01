import { useRoutes } from "react-router-dom";
import Dashboard from "@/src/components/Pages/dashboard";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";
import Login from "@/src/components/Pages/Auth/Login";
import AuthLayout from "@/src/components/Templates/AuthLayout";
import ForgetPassword from "@/src/components/Pages/Auth/ForgetPassword";
import SignUp from "@/src/components/Pages/Auth/SignUp";
import OTP from "@/src/components/Pages/Auth/OTP";
import ChangePassword from "@/src/components/Pages/Auth/ChangePassword";
import SuccessPassChanged from "@/src/components/Pages/Auth/SuccessPassChanged";
import SuccessSignUp from "@/src/components/Pages/Auth/SuccessSignUp";

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
      path: "/change-password",
      element: (
        <AuthLayout>
          <ChangePassword />
        </AuthLayout>
      ),
    },
    {
      path: "/success-changed-password",
      element: (
        <AuthLayout>
          <SuccessPassChanged />
        </AuthLayout>
      ),
    },
    {
      path: "/success-signup",
      element: (
        <AuthLayout>
          <SuccessSignUp />
        </AuthLayout>
      ),
    },
    {
      path: "/otp",
      element: (
        <AuthLayout>
          <OTP />
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
