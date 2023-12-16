import React, { useContext } from "react";
import "../styles/ScheduleItem.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const ScheduleItem = observer(
  ({ subject, time, room, group, onClick, teacher }) => {
    const { journal } = useContext(Context);

    //   return (
    //     <div className="schedule-page">
    //       {journal.classes.map((item) => (
    //         <div className="schedule-item" key={item.id} onClick={onClick}>
    //           <div className="time">{item.time.hours}</div>
    //           <div className="content-schd">
    //             <p className="subject">{item.subject.name}</p>
    //             <p className="group">{item.group.name}</p>
    //           </div>
    //           <div className="room">{item.room.number}</div>
    //         </div>
    //       ))}
    //     </div>
    //   );
    return (
      <div className="schedule-page">
        <div className="schedule-item" onClick={onClick}>
          <div className="time">{time}</div>
          <div className="content-schd">
            <p className="subject">{subject}</p>
            <p className="teacher">{teacher}</p>
            <p className="group">{group}</p>
          </div>
          <div className="room">{room}</div>
        </div>
      </div>
    );
  }
);

export default ScheduleItem;
