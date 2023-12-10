import React, { useContext } from "react";
import "../styles/ScheduleItem.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const ScheduleItem = observer(({ subject, time, room, group, onClick }) => {
  const { journal } = useContext(Context);

  return (
    <div className="schedule-page">
      {journal.classes.map((item) => (
        <div className="schedule-item" key={item.id} onClick={onClick}>
          <div className="time">{item.time.hours}</div>
          <div className="content-schd">
            <p className="subject">{item.subject.name}</p>
            <p className="group">{item.group.name}</p>
          </div>
          <div className="room">{item.room.number}</div>
        </div>
      ))}
    </div>
  );
});

export default ScheduleItem;
