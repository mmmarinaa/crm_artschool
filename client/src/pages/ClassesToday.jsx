import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { observer } from "mobx-react-lite";
import InputSearch from "../components/InputSearch";
import Clock from "../components/Clock";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { JOURNAL_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import ScheduleItem from "../components/ScheduleItem";
import { fetchClasses } from "../http/journalAPI";

const scheduleData = [
  {
    id: 1,
    subject: "Живопись",
    time: "9:00",
    room: "101",
    group: "Жу-02-23",
  },
  {
    id: 2,
    subject: "Скульптура",
    time: "11:00",
    room: "201",
    group: "Жу-02-23",
  },
];

const ClassesToday = observer(() => {
  const { user } = useContext(Context);
  const { journal } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClasses().then((data) => journal.setClasses(data));
  }, []);

  const handleItemClick = () => {
    navigate(JOURNAL_ROUTE + "/1");
  };
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
        <ScheduleItem onClick={() => handleItemClick()} />
      </div>
    </div>
  );
});

export default ClassesToday;
