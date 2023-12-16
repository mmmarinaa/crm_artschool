import React from "react";
import Checkbox from "./Checkbox";
import DropDownList from "./DropDownList";
import "../styles/Table.css";
import { GoPencil } from "react-icons/go";
import { BsCircleFill } from "react-icons/bs";

const TableMarks = () => {
  const getCurrentDayAndDate = () => {
    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0

    return `${dayOfWeek}, ${date}.${month}`;
  };
  return (
    <table className="my-table">
      <thead>
        <tr>
          <th>ФИО</th>
          <th>
            <p>{getCurrentDayAndDate()}</p>
            <p>13:45</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Иванова Татьяна</td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Казаков Максим</td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Кириллова Дарья</td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Осипова Анастасия</td>
          <td>
            <DropDownList />
          </td>
        </tr>
        <tr>
          <td>Сидоров Алексей</td>
          <td>
            <DropDownList />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableMarks;
