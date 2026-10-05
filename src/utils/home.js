import {
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiOutlineChatBubbleLeftRight,
  HiOutlineTrophy,
} from "react-icons/hi2";

const generateSummaries = ({
  productsLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productsLength,
      unit: "عدد",
      Icon: HiOutlineShoppingBag,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      value: usersLength,
      unit: "عدد",
      Icon: HiOutlineUsers,
    },
    {
      id: 3,
      title: "تعداد تیکت‌ها",
      value: ticketsLength,
      unit: "عدد",
      Icon: HiOutlineChatBubbleLeftRight,
    },
    {
      id: 4,
      title: "تعداد مدیران",
      value: adminsLength,
      unit: "عدد",
      Icon: HiOutlineTrophy,
    },
  ];
};

const generateChartData = ({
  productsLength,
  usersLength,
  ticketsLength,
  adminsLength,
}) => {
  return [
    {
      name: "تعداد محصولات",
      value: productsLength,
    },
    {
      name: "تعداد کاربران",
      value: usersLength,
    },
    {
      name: "تعداد مدیران",
      value: adminsLength,
    },
    {
      name: "تعداد تیکت‌ها",
      value: ticketsLength,
    },
  ];
};
export { generateSummaries , generateChartData };
