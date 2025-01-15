import Login from "@/src/components/Pages/Auth/Login";
import Home from "@/src/components/Pages/home";
import Orders from "@/src/components/Pages/orders";
import AuthLayout from "@/src/components/Templates/AuthLayout";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";

export default {
  main: [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Home />
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
      path: "/my_orders",
      element: (
        <DashboardLayout>
          <Orders />
        </DashboardLayout>
      ),
    },
  ],
};
