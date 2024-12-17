import i18n from "@/i18n";

export const generalLinks = {
  seller: [
    { icon: "home", label: i18n.t("Home"), href: "/" },
    { icon: "package", label: i18n.t("Products"), href: "/products" },
    { icon: "orders", label: i18n.t("Orders"), href: "/orders" },
    { icon: "promo", label: i18n.t("Promo Codes"), href: "/promo" },
    {
      icon: "brand-profile",
      label: i18n.t("Brand Profile"),
      href: "/brand-profile",
    },
  ],
  admin: [
    { icon: "home", label: i18n.t("Home"), href: "/" },
    { icon: "orders", label: i18n.t("Orders"), href: "/orders" },
    { icon: "package", label: i18n.t("Products"), href: "/products" },
    { icon: "promo", label: i18n.t("Merchants"), href: "/merchants" },
    { icon: "brand-profile", label: i18n.t("Users"), href: "/users" },
    {
      icon: "brand-profile",
      label: i18n.t("Notifications"),
      href: "/notifications",
    },
    { icon: "brand-profile", label: i18n.t("Promo Codes"), href: "/promo" },
    { icon: "brand-profile", label: i18n.t("Categories"), href: "/categories" },
  ],
};

export const supportLinks = {
  seller: [
    {
      icon: "contact-us",
      label: i18n.t("contact_us_main_title"),
      href: "/contact-us",
    },
    { icon: "faq", label: i18n.t("FAQ"), href: "/faq" },
  ],
  admin: [],
};
