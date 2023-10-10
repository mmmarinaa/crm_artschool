import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

export const ServiceData = [
  {
    title: "Настройки",
    icon: <IoSettingsOutline className="icon" />,
    name: "settings",
    link: "/settings",
  },
  {
    title: "Помощь",
    icon: <IoIosHelpCircleOutline className="icon" />,
    name: "help",
    link: "/help",
  },
];
