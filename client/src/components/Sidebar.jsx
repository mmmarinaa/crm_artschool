import React, { useState } from "react";
import "../styles/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { ServiceData } from "./ServiceData";
import Logo from "../images/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} />
        <span>ARTSCAPE</span>
      </div>
      <ul className="sidebar_list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="list_element"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <ul className="service_list">
        {ServiceData.map((val, key) => {
          return (
            <li
              key={key}
              className="list_element"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon" name={val.name}>
                {val.icon}
              </div>
              <div id="title" name={val.name}>
                {val.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
