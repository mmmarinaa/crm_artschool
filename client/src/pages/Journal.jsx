import React from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import InputSearch from "../components/InputSearch";
import Clock from "../components/Clock";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import { IoExitOutline } from "react-icons/io5";
function Journal() {
  return (
    <div>
      <Sidebar />
      <div className="content_page">
        <header>
          <div className="left_content">
            <h3>Журнал</h3>
            <InputSearch />
          </div>
          <div className="right_content">
            <Clock />
            <Settings />
            <Profile />
            <a href="" className="exit" title="Выйти">
              <IoExitOutline className="icon" />
            </a>
          </div>
        </header>
        <Tabs />
      </div>
    </div>
  );
}

export default Journal;
