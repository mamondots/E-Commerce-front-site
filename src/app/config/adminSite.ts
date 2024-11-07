import { MdOutlineAddBox } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

import { AiOutlineProduct } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

// Define the adminItems array with icons
export const adminItems = [
  {
    label: "Admin Home",
    href: "/admin",
    icon: MdOutlineAdminPanelSettings,
    tooptip: "Admin Home",
  },
  {
    label: "Add Product",
    href: "/add_products",
    icon: MdOutlineAddBox,
    tooptip: "Add Product",
  },

  {
    label: "Manage Products",
    href: "/manage_products",
    icon: AiOutlineProduct,
    tooptip: "Manage Products",
  },
  {
    label: "Manage User",
    href: "/manage_user",
    icon: PiUsersThreeBold,
    tooptip: "Manage User",
  },
  {
    label: "Manage Categories",
    href: "/manage_categories",
    icon: BiCategoryAlt,
    tooptip: "Manage Categories",
  },
  {
    label: "Manage Payment",
    href: "/manage_payment",
    icon: RiSecurePaymentLine,
    tooptip: "Manage Payment",
  },
];
