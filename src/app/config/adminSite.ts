import { MdOutlineAddBox } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

import { AiOutlineProduct } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";

// Define the adminItems array with icons
export const adminItems = [
  {
    label: "Add Product",
    href: "/admin",
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
    href: "/c",
    icon: PiUsersThreeBold,
    tooptip: "Manage User",
  },
  {
    label: "Manage Categories",
    href: "/d",
    icon: BiCategoryAlt,
    tooptip: "Manage Categories",
  },
  {
    label: "Manage Payment",
    href: "/f",
    icon: RiSecurePaymentLine,
    tooptip: "Manage Payment",
  },
];
