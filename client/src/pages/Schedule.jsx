import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import InputSearch from "../components/InputSearch";
import Clock from "../components/Clock";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import { IoExitOutline } from "react-icons/io5";
import { Context } from "../index";
import ScheduleItem from "../components/ScheduleItem";
import { fetchSchedule } from "../http/scheduleAPI";
import { LOGIN_ROUTE, JOURNAL_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import ScheduleTable from "../components/ScheduleTable";

function Schedule() {
  const { user } = useContext(Context);
  const { schedule } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSchedule().then((data) => schedule.setSchedule(data));
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
            <h3>Расписание</h3>
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
        <ScheduleTable />
        {schedule.schedule.map((item) => (
          <ScheduleItem
            onClick={() => handleItemClick()}
            time={item.time_slot[1]}
            subject={item.subject}
            group={item.group}
            room={item.classroom[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedule;
