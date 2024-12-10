import { useRoutes } from "react-router-dom";
import Home from "@/src/components/Pages/home";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";
import Login from "@/src/components/Pages/Auth/Login";
import AuthLayout from "@/src/components/Templates/AuthLayout";
import ForgetPassword from "@/src/components/Pages/Auth/ForgetPassword";
import SignUp from "@/src/components/Pages/Auth/SignUp";
import OTP from "@/src/components/Pages/Auth/OTP";
import ChangePassword from "@/src/components/Pages/Auth/ChangePassword";
import SuccessPassChanged from "@/src/components/Pages/Auth/SuccessPassChanged";
import SuccessSignUp from "@/src/components/Pages/Auth/SuccessSignUp";
import MerchantInfo from "@/src/components/Pages/Auth/MerchantInfo";
import Products from "@/src/components/Pages/products";
import AddProduct from "@/src/components/Pages/products/AddProduct";
import ProductDetails from "@/src/components/Pages/products/ProductDetails";
import EditProduct from "@/src/components/Pages/products/EditProduct";
import Orders from "@/src/components/Pages/orders";
import ContactUS from "@/src/components/Pages/contactUs";

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
    {
      path: "/products/add-product",
      element: (
        <DashboardLayout>
          <AddProduct />
        </DashboardLayout>
      ),
    },
    {
      path: "/products/product-details",
      element: (
        <DashboardLayout>
          <ProductDetails />
        </DashboardLayout>
      ),
    },
    {
      path: "/products/edit-product",
      element: (
        <DashboardLayout>
          <EditProduct />
        </DashboardLayout>
      ),
    },
    {
      path: "/orders",
      element: (
        <DashboardLayout>
          <Orders />
        </DashboardLayout>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <DashboardLayout>
          <ContactUS />
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
      path: "/merchant-info",
      element: (
        <AuthLayout>
          <MerchantInfo />
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
