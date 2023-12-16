import React from "react";
import { useState, useEffect } from "react";
import Table from "./Table";
import InputDate from "./InputDate";
import PeriodButton from "./PeriodButton";
import SaveButton from "./SaveButton";
import TableMarks from "./TableMarks";
import "../styles/Tabs.css";
import InputSort from "./InputSort";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const [selectedValue, setSelectedValue] = useState(null);
  const [buttonText, setButtonText] = useState("Сохранить");
  const name = "Сохранить";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Отображаем модальное окно
      document.querySelector(".modal-overlay").style.display = "flex";
      document.querySelector(".modal-content").classList.add("animated");

      // Анимация закрытия через 3 секунды (можете настроить на нужное вам время)
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    document.querySelector(".modal-overlay").style.display = "none";
    document.querySelector(".modal-content").classList.remove("animated");
  };

  const toggleButtonText = () => {
    setButtonText((prevText) =>
      prevText === "Сохранить" ? "Изменить" : "Сохранить"
    );
  };

  useEffect(() => {
    if (isModalOpen) {
      toggleButtonText();
    }
  }, [isModalOpen]);
  const handleSaveButtonClick = () => {
    if (buttonText === "Сохранить") {
      openModal();
      // Дополнительная логика сохранения данных, если необходимо
    } else {
      toggleButtonText();
      // Дополнительная логика для случая, когда название кнопки "Изменить"
    }
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
          <Table
            buttonText={buttonText}
            selectedValues={selectedValue}
            onSelect={(value) => setSelectedValue(value)}
          />
          <div className="button__space">
            <SaveButton name={buttonText} onClick={handleSaveButtonClick} />
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
            <SaveButton name={name} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content animated">
            <div className="wrapper wrapper--check">
              <svg
                id="icon1"
                className="test-icon"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#1F9D55"
                strokeWidth="3"
                strokeDasharray="100"
              >
                <path
                  className="icon-path"
                  id="check"
                  d="M 12,22 L 22,31 L 36,13"
                ></path>
              </svg>
            </div>
            <p>Данные успешно добавлены</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
