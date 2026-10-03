import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";

const menuItems = [
  {
    id: 1,
    title: "منوی اصلی",
    items: [
      { id: 1,
        href: "/dashboard",
        title: "داشبورد",
        icon: HiOutlineHome,
      },

      {
        id: 2,
        href: "/dashboard/products",
        title: "محصولات",
        icon: HiOutlineShoppingCart,
      },

      { id: 3,
        href: "/dashboard/users",
        title: "کاربران",
        icon: HiOutlineUsers,
      },
      
      {
        id: 4,
        href: "/dashboard/tickets",
        title: "تیکت‌ها",
        icon: HiOutlineChatBubbleLeftRight,
      },

      { id: 5,
        href: "/dashboard/comments",
        title: "نظرات",
        icon: BiCommentDetail,
      },
    ],
  },
];

export default menuItems;
