import React from "react";
import { useState } from "react";
import Table from "./Table";
import InputDate from "./InputDate";
import PeriodButton from "./PeriodButton";
import SaveButton from "./SaveButton";
import TableMarks from "./TableMarks";
import "../styles/Tabs.css";
import InputSort from "./InputSort";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const inputs = [
    {
      id: 1,
      name: "date-from",
      label: "Дата с:",
    },
    {
      id: 2,
      name: "date-to",
      label: "Дата по:",
    },
  ];

  const periodButtons = [
    {
      id: 1,
      name: "сегодня",
    },
    {
      id: 2,
      name: "вчера",
    },
    {
      id: 3,
      name: "неделя",
    },
    {
      id: 4,
      name: "месяц",
    },
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="blok__tabs">
        <div
          className={toggleState === 1 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Посещаемость
        </div>
        <div
          className={toggleState === 2 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Успеваемость
        </div>
      </div>
      <div className="content__tabs">
        <div
          className={toggleState === 1 ? "content active__content" : "content"}
        >
          <div className="elements__space">
            {inputs.map((input) => (
              <InputDate key={input.id} {...input} />
            ))}
          </div>
          <div className="elements__space">
            <InputSort />
          </div>
          <Table />
          <div className="button__space">
            <SaveButton />
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content active__content" : "content"}
        >
          <div className="elements__space">
            {inputs.map((input) => (
              <InputDate key={input.id} {...input} />
            ))}
          </div>
          <div className="elements__space">
            <InputSort />
          </div>
          {/* <div className="elements__space">
            {periodButtons.map((periodButton) => (
              <PeriodButton key={periodButton.id} {...periodButton} />
            ))}
          </div> */}
          <TableMarks />
          <div className="button__space">
            <SaveButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
