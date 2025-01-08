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
import OrderDetailsPage from "@/src/components/Pages/orders/OrderDetails";
import ContactUS from "@/src/components/Pages/contactUs";
import BrandProfile from "@/src/components/Pages/BrandProfile";
import Merchants from "@/src/components/Pages/merchants";
import Users from "@/src/components/Pages/users";
import Notifications from "@/src/components/Pages/notifications";
import Promo from "@/src/components/Pages/promo";
import Categories from "@/src/components/Pages/categories";
import AddPromoCode from "@/src/components/Pages/addPromoCode";
import AddMerchant from "@/src/components/Pages/merchants/AddMerchant";
import MerchantDetails from "@/src/components/Pages/merchants/MerchantDetails";
import Faqs from "@/src/components/Pages/Faqs";
import AddUser from "@/src/components/Pages/users/AddUser";
import UserDetails from "@/src/components/Pages/users/UserDetails";
import AddPromo from "@/src/components/Pages/promo/addPromo";
import Messages from "@/src/components/Pages/message";
import MessageDetails from "@/src/components/Pages/message/messageDetails";
import SubCategories from "@/src/components/Pages/categories/subCategories";
import AddSubCategory from "@/src/components/Pages/categories/AddSubCategory";
import AddCategory from "@/src/components/Pages/categories/AddCategory";

export default {
  common: [
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
      path: "/orders/order-details",
      element: (
        <DashboardLayout>
          <OrderDetailsPage />
        </DashboardLayout>
      ),
    },
    {
      path: "/promo",
      element: (
        <DashboardLayout>
          <Promo />
        </DashboardLayout>
      ),
    },
    {
      path: "/promo/add-promo",
      element: (
        <DashboardLayout>
          <AddPromo />
        </DashboardLayout>
      ),
    },
  ],
  auth: [
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
      path: "/sign-up",
      element: (
        <AuthLayout>
          <SignUp />
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
      path: "/merchant-info",
      element: (
        <AuthLayout>
          <MerchantInfo />
        </AuthLayout>
      ),
    },
  ],
  seller: [
    {
      path: "/contact-us",
      element: (
        <DashboardLayout>
          <ContactUS />
        </DashboardLayout>
      ),
    },
    {
      path: "/Faqs",
      element: (
        <DashboardLayout>
          <Faqs />
        </DashboardLayout>
      ),
    },

    {
      path: "/brand-profile",
      element: (
        <DashboardLayout>
          <BrandProfile />
        </DashboardLayout>
      ),
    },
  ],
  admin: [
    {
      path: "/merchants",
      element: (
        <DashboardLayout>
          <Merchants />
        </DashboardLayout>
      ),
    },
    {
      path: "/merchants/add-merchant",
      element: (
        <DashboardLayout>
          <AddMerchant />
        </DashboardLayout>
      ),
    },
    {
      path: "/merchants/merchant-details",
      element: (
        <DashboardLayout>
          <MerchantDetails />
        </DashboardLayout>
      ),
    },
    {
      path: "/users",
      element: (
        <DashboardLayout>
          <Users />
        </DashboardLayout>
      ),
    },
    {
      path: "/users/add-user",
      element: (
        <DashboardLayout>
          <AddUser />
        </DashboardLayout>
      ),
    },
    {
      path: "/users/user-details",
      element: (
        <DashboardLayout>
          <UserDetails />
        </DashboardLayout>
      ),
    },
    {
      path: "/notifications",
      element: (
        <DashboardLayout>
          <Notifications />
        </DashboardLayout>
      ),
    },
    {
      path: "/categories",
      element: (
        <DashboardLayout>
          <Categories />
        </DashboardLayout>
      ),
    },
    {
      path: "/categories/sub-categories",
      element: (
        <DashboardLayout>
          <SubCategories />
        </DashboardLayout>
      ),
    },
    {
      path: "/categories/add-sub-category",
      element: (
        <DashboardLayout>
          <AddSubCategory />
        </DashboardLayout>
      ),
    },
    {
      path: "/categories/add-category",
      element: (
        <DashboardLayout>
          <AddCategory />
        </DashboardLayout>
      ),
    },
    {
      path: "/messages",
      element: (
        <DashboardLayout>
          <Messages />
        </DashboardLayout>
      ),
    },
    {
      path: "/messages/message-details",
      element: (
        <DashboardLayout>
          <MessageDetails />
        </DashboardLayout>
      ),
    },
    {
      path: "/promo-codes/add-promo-code",
      element: (
        <DashboardLayout>
          <AddPromoCode />
        </DashboardLayout>
      ),
    },
  ],
};
