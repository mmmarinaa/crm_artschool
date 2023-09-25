import React from "react";
import { RxCalendar } from "react-icons/rx";
import { IoMdBook } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Расписание",
    icon: <RxCalendar />,
    link: "/schedule",
  },
  {
    title: "Журнал",
    icon: <IoMdBook />,
    link: "/journal",
  },
  {
    title: "Отчеты",
    icon: <VscGraph />,
    link: "/reports",
  },
];
