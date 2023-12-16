import React, { useContext, useEffect } from "react";
import DropDownList from "./DropDownList";
import "../styles/ScheduleTable.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ScheduleItem from "../components/ScheduleItem";
import { fetchSchedule } from "../http/scheduleAPI";

const ScheduleTable = observer(() => {
  const { schedule } = useContext(Context);

  useEffect(() => {
    fetchSchedule().then((data) => schedule.setSchedule(data));
  }, []);

  const scheduleByDay = {};

  // Проверка на наличие данных в schedule и day в каждом элементе
  if (schedule.schedule) {
    schedule.schedule.forEach((item) => {
      const dayOfWeek = item.time_slot[0]; // Используем day вместо time_slot[0]
      if (!scheduleByDay[dayOfWeek]) {
        scheduleByDay[dayOfWeek] = [];
      }
      scheduleByDay[dayOfWeek].push(item);
    });
  }

  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return (
    <table className="full-width">
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, index) => (
          <tr key={index}>
            {daysOfWeek.map((dayOfWeek) => {
              const currentItem = scheduleByDay[dayOfWeek]?.[index]; // Проверяем наличие элемента в массиве
              return (
                <td key={`${dayOfWeek}-${index}`}>
                  {currentItem && currentItem.teacher === "Петрова" && (
                    <ScheduleItem
                      time={currentItem.time_slot[1]}
                      subject={currentItem.subject}
                      group={currentItem.group}
                      room={currentItem.classroom[0]}
                    />
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default ScheduleTable;
