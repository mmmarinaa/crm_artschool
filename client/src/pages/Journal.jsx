import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import InputSearch from "../components/InputSearch";
import Clock from "../components/Clock";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { LOGIN_ROUTE } from "../utils/consts";

function Journal() {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
  };
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
            <button onClick={() => logout()} className="exit" title="Выйти">
              <IoExitOutline className="icon" />
            </button>
          </div>
        </header>
        <Tabs />
      </div>
    </div>
  );
}

export default Journal;
