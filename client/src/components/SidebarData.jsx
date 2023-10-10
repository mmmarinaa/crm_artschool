import React from "react";
import { RxCalendar } from "react-icons/rx";
import { IoMdBook } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Расписание",
    icon: <RxCalendar className="icon" />,
    link: "/schedule",
  },
  {
    title: "Журнал",
    icon: <IoMdBook className="icon" />,
    link: "/journal",
  },
  {
    title: "Отчеты",
    icon: <VscGraph className="icon" />,
    link: "/reports",
  },
];
