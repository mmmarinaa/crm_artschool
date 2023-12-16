import React, { useContext, useEffect, useState } from "react";
import DropDownList from "./DropDownList";
import "../styles/Table.css";
import { Context } from "../index";
import { fetchOneClass } from "../http/journalAPI";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Table = observer((props) => {
  const name = "attendance";
  const { journal } = useContext(Context);
  const { id } = useParams();
  const [showDropDownList, setShowDropDownList] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const { buttonText, selectedValues, onSelect } = props;
  const getCurrentDayAndDate = () => {
    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0

    return `${dayOfWeek}, ${date}.${month}`;
  };

  useEffect(() => {
    fetchOneClass(id).then((data) => journal.setPeople(data));
  }, []);

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
        {journal.people.map((item) => (
          <tr key={item.id}>
            <td>{item.surname + " " + item.name + " " + item.patronymic}</td>
            <td>
              <DropDownList
                name="attendance"
                buttonText={buttonText}
                isDropdownVisible={buttonText === "Сохранить"}
                selectedValue={selectedValue}
                onSelect={onSelect}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default Table;
