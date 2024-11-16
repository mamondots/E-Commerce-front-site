import { MdOutlineAddBox } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

import { MdOutlineAdminPanelSettings } from "react-icons/md";

// Define the adminItems array with icons
export const userItems = [
  {
    label: "User Home",
    href: "/user",
    icon: MdOutlineAdminPanelSettings,
    tooptip: "User Home",
  },
  {
    label: "Product",
    href: "/add_products",
    icon: MdOutlineAddBox,
    tooptip: "Product",
  },
  {
    label: "Manage Payment",
    href: "/manage_payment",
    icon: RiSecurePaymentLine,
    tooptip: "Manage Payment",
  },
];
